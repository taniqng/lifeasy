import Ember from 'ember';
const { inject: { service }, computed } = Ember;
const { keys } = Object;

export default Ember.Service.extend({
  cookies: service(),
  goodService : service(),

  initCartItems: function(cartGoods) {
    let cartCookieModel = this._getCookieCartItems();
    let cart = this._getRealCartItems(cartCookieModel);
    this.set('cart',cart);
  },

  _getCookieCartItems: function(){
    let cookieService = this.get('cookies');
    let goodService = this.get('goodService');
    let cartStr = cookieService.read("cart",{path:'/'});
    if(cartStr){
      return JSON.parse(cartStr);
    } else {
      return undefined;
    }
  },

  loadCartGoods: function(){
    let cartCookieModel = this._getCookieCartItems();
    let goodService = this.get('goodService');
    let ids = Ember.A(cartCookieModel).mapBy('good');
    return goodService.findGoods(ids);
  },

  _getRealCartItems: function(cartCookieModel){
    let goods = this.get('cartGoods');
    if(goods){
      let cartItems = cartCookieModel.map((item)=>{
        return {good:goods.findBy("id", item.good),count:item.count};
      });
      return cartItems;
    } else {
      return undefined;
    }
  },

  saveCartItems: function(cartCookieModel){
    if(cartCookieModel){
      let cookieService = this.get('cookies');
      cookieService.write('cart', JSON.stringify(cartCookieModel),{path:'/',maxAge:60*60*24*30});
      let realCartItems = this._getRealCartItems(cartCookieModel);
      this.set('cart', realCartItems);
    }
  },

  addToCart: function(good, count){
    let cookieItems = this._getCookieCartItems();
    if(!cookieItems){
      cookieItems=Ember.A([]);
    }
    let existGood = cookieItems.find((item, index, enumerable)=>{
      //good = Ember.Object.create(good);
      if(item.good == good.get('id')){
        return true;
      }
    })
    if(existGood){
      existGood.count=existGood.count+count;
      if(existGood.count<=0){
        cookieItems.removeObject(existGood);
      }
    } else {
      if(count>0){
        cookieItems.pushObject({good:good.get('id'), count: count});
      }
    }
    this.saveCartItems(cookieItems);
  }
});

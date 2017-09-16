import Ember from 'ember';

const { inject: { service }, computed } = Ember;

export default Ember.Controller.extend({
  shoppingCart: service(),

  totalAmount: Ember.computed('shoppingCart.cart', function() {
    let cart = this.get('shoppingCart.cart');
    let amount = cart.reduce((am, item)=>{
      am.push(parseInt(item.good.get('price')*item.count));
      return am;
    },[]);
    amount = amount.reduce((m,n)=>m+n);
    return amount;
  }),

  freight: Ember.computed('totalAmount', function() {
    let am = this.get('totalAmount');
    if(am>100){
      return 0;
    }else{
      return 20;
    }
  }),

  total: Ember.computed('totalAmount', function() {
    let am = this.get('totalAmount');
    let f = this.get('freight');
    let amount = am - f;
    return amount;
  }),

});

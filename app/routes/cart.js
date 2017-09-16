import Ember from 'ember';

const { inject: { service }, computed } = Ember;

export default Ember.Route.extend({
  shoppingCart: service(),

  model: function(){
    return this.get('shoppingCart').loadCartGoods();
  },

  afterModel: function(cartGoods, transition){
    this.set('shoppingCart.cartGoods', cartGoods);
    this.get('shoppingCart').initCartItems(cartGoods);
  }
});

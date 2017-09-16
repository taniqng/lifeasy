import Ember from 'ember';
const { inject: { service }, computed } = Ember;

export default Ember.Component.extend({

  shoppingCart: service(),

  model: computed("shoppingCart.cart",function() {
    return this.get('shoppingCart.cart');
  }),

  actions: {
    addToCart (good, count) {
      this.get('shoppingCart').addToCart(good, count);
    }
  }

});

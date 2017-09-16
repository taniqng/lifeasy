import Ember from 'ember';
const { inject: { service }, computed } = Ember;

export default Ember.Controller.extend({

  shoppingCart: service(),

  detailPics: Ember.computed('model.picture', function() {
    let pic = this.get('model.picture');
    if(pic){
      return pic.split(",");
    } else {
      return undefined;
    }

  }),

  actions: {
    addToCart (good) {
      this.get('shoppingCart').addToCart(good, 1);
    }
  }

});

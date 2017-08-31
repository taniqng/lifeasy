import Ember from 'ember';

export default Ember.Route.extend({

  model(param) {
    return this.get('store').query('good',{shopId:1});
  }
  
});

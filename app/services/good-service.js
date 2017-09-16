import Ember from 'ember';
const { inject: { service }, computed } = Ember;

export default Ember.Service.extend({
  store: service(),

  findGoods: function(goodIds){
    let storeService = this.get('store');
    return storeService.query('good', {ids: goodIds});
  }

});

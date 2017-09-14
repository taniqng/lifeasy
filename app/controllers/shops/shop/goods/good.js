import Ember from 'ember';

export default Ember.Controller.extend({

  detailPics: Ember.computed('model.picture', function() {
    let pic = this.get('model.picture');
    if(pic){
      return pic.split(",");
    } else {
      return undefined;
    }

  })
});

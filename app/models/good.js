import DS from 'ember-data';

export default DS.Model.extend({

  shopId: DS.attr('number'),
  name: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('number'),
  count: DS.attr('number'),
  picture: DS.attr('string'),
  status: DS.attr('string'),
  minPic: DS.attr('string')
  
});

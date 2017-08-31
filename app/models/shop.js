import DS from 'ember-data';

export default DS.Model.extend({

  name: DS.attr('string'),
  fullName: DS.attr('string'),
  description: DS.attr('string'),
  address: DS.attr('string'),
  telphone: DS.attr('string'),
  avadar: DS.attr('string'),
  wxNumber: DS.attr('string'),
  createDate: DS.attr('date')

});

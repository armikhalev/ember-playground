import DS from 'ember-data';

export default DS.Model.extend({
    english: DS.attr('string'),
    comment: DS.attr('string')
});

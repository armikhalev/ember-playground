import DS from 'ember-data';

export default DS.Model.extend({
    english: DS.attr('string'),
    spanish: DS.attr('string'),
    language: DS.attr('string')
});

import DS from 'ember-data';

export default DS.Model.extend({
    mela: DS.attr('string'),
    comment: DS.attr('string')
});

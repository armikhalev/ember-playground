import Ember from 'ember';

export default Ember.Component.extend({
    actions: {

    },
    didInsertElement() {
        this._super(...arguments);
        this.$('.canAddThis').append("====================");
    }
});

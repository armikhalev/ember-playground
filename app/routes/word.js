import Ember from 'ember';

export default Ember.Route.extend({
    model(param){
        console.log('it is my own : ',param);
        return this.store.findAll('word');
    }
});

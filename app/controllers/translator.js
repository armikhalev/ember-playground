import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    filterByWord(param) {
      if (param !== '' && param.length > 0) {
        return this.get('store').query('word', { word: param }) 
        // . catch(err => console.log('%c ajaxError: ', 'color: #bada55'));
      } else {
        return this.get('store').findAll('word');
      }
    },
    filterByCity(param) {
      if (param !== '') {
        return this.get('store').query('rental', { city: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});

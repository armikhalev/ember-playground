import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    filterByWord(param) {
      
      function ensurePromise(x) {
          return new Ember.RSVP.Promise(function(resolve) {
              resolve(x);
          });
      }

      if (param !== '' && param.length < 2) {
        if (param === 'a') {
          return this.get('store').findAll('a-word',{ backgroundReload: false });
        }
        else if (param === 'b') {
          return this.get('store').findAll('b-word',{ backgroundReload: false });
        }
        else if (param === 'c') {
          return this.get('store').findAll('c-word',{ backgroundReload: false });
        }
        // return this.store.query('word', { word: param });
      }       
      if (param !== '' && param.length >= 2) {
          let search = "";

          if (param.charAt(0) === "a") {
              search = this.store.filter('a-word', function(record){
                return record.get('english') == param;
              }) 
          }   
          else if (param.charAt(0) === "b") {
              search = this.store.filter('b-word', function(record){
                return record.get('english') == param;
              }) 
          }   
          else if (param.charAt(0) === "c") {
              search = this.store.filter('c-word', function(record){
                return record.get('english') == param;
              }) 
          }  

        return ensurePromise(search);
      } else {
        return this.get('store').findAll('word',{ backgroundReload: false });
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

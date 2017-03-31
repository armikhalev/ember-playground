import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('translator');
  this.route('word', {path: '/words'});
  this.route('english-word', {path: '/english-words/:word'});
  this.route('mela-word', {path: '/mela-words/:la'});
  this.route('rental-listing', {path: '/rentals'});
  this.route('rentals', function() {
    this.route('show', { path: '/:rental_id' });
  });
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('translator');
  this.route('english-to-spanish');
  this.route('word', {path: '/words'});
  this.route('comment', {path: '/comments/:body'});
  this.route('english-word', {path: '/english-words/:word'});
  this.route('mela-word', {path: '/mela-words/:la'});
});

export default Router;

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('projects', function() {
    this.route('emberitas');
  });
  this.route('talks');
  this.route('contact');
});

export default Router;

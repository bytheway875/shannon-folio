import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service('-routing'),
  classNames: ['about', 'content-section'],
  didInsertElement(){
    Ember.$('.nav a').removeClass('dark')

  },
  didRender: function() {
    this.$().attr({ tabindex: 1 });
    this.$().focus();
  },
  keyDown(e) {
    // right arrow
    if ((e.keyCode || e.which) === 39)
    {
      this._transitionToNext();
        // do something
    }
    // // left arrow
    if ((e.keyCode || e.which) === 37)
    {
      this._transitionToPrevious();
    }
  },
  actions: {
    toNext(){
      this._transitionToNext();
    },
    toPrevious(){
      this._transitionToPrevious();
    }
  },
  _transitionToNext(){
    this.get('router').transitionTo('projects');
  },
  _transitionToPrevious(){
    this.get('router').transitionTo('index');
  }

});

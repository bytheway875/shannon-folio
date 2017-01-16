import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service('-routing'),
  classNames: ['talks', 'content-section'],
  didInsertElement(){
    Ember.$('.nav a').addClass('dark')

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
    this.get('router').transitionTo('contact');
  },
  _transitionToPrevious(){
    this.get('router').transitionTo('projects');
  }

});

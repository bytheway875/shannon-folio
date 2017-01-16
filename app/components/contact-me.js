import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service('-routing'),
  classNames: ['contact', 'content-section'],
  didRender: function() {
    this.$().attr({ tabindex: 1 });
    this.$().focus();
    Ember.$('.nav a').addClass('dark')
  },
  keyDown(e) {
    // left arrow
    if ((e.keyCode || e.which) === 37)
    {
      this._transitionToPrevious();
        // do something
    }

  },
  actions: {
    toPrevious(){
      this._transitionToPrevious();
    }
  },
  _transitionToPrevious(){
    this.get('router').transitionTo('talks');

  }
});

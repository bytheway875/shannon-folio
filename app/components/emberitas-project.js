import Ember from 'ember';

export default Ember.Component.extend({
  router: Ember.inject.service('-routing'),
  classNames: ['emberitas', 'content-section'],
  didInsertElement(){
    // let hello = Ember.$('.hello');
    // TweenMax.from(hello, 3, { ease: Back.easeOut.config(1.7), backgroundColor: "#dbc3d0" });
    // TweenMax.to(Ember.$('.hello p'), 3, { opacity: 1, delay: 1 });
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
    // left arrow
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
    this.get('router').transitionTo('projects');
  }
});

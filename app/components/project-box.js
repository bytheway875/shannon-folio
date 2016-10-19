import Ember from 'ember';

export default Ember.Component.extend({
  showInfo: false,
  mouseEnter(){
    this.toggleProperty('showInfo');
  },
  mouseLeave(){
    this.toggleProperty('showInfo');
  }
});

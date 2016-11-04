import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  add(question) {
    this.get('favoriteQuestions').pushObject(question);
  },
  remove(question) {
    this.get('favoriteQuestions').removeObject(question);
  }

});

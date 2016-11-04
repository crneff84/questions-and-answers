import Ember from 'ember';

export default Ember.Service.extend({
  favoriteQuestions: [],

  add(question) {
    if(question.get('alreadyInList') === false) {
      this.get('favoriteQuestions').pushObject(question);
    }
  },
  remove(question) {
    this.get('favoriteQuestions').removeObject(question);
  },
  includes(question) {
    return this.get('favoriteQuestions').includes(question);
  },

});

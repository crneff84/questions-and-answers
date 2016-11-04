import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

  answercount: Ember.computed('question.answers', function() {
    var count = this.get('question.answers.content.length');
    return count;
  }),
  actions: {
    addToFavorites(question) {
      this.get('favorite').add(question);
    },
    removeFromFavorites(question) {
      this.get('favorite').remove(question);
    },
    destroyQuestion(question) {
      if(confirm("Are you sure you want to delete this question?")){
        this.sendAction('destroyQuestion', question);
      }
    },
    updateQuestion(question, params){
      this.sendAction('updateQuestion',question, params);
    },
    saveAnswer(params){
      this.sendAction('saveAnswer', params)
    },
    destroyAnswer(answer){
      this.sendAction('destroyAnswer', answer);
    },
    updateAnswer(answer, params){
      this.sendAction('updateAnswer', answer, params);
    }
  }
});

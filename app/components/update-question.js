import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
  actions: {
    updateQuestionShown(){
      this.set('updateQuestionForm', true);
    },
    updateQuestion(question){
      var params = {
        inquiry: this.get('inquiry'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});

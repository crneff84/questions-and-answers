import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerShown(){
      this.set('updateAnswerForm', true);
    },
    updateAnswerHide(){
      this.set('updateAnswerForm', false);
    },
    updateAnswer(answer){
      var params= {
        explanation: this.get('explanation'),
        author: this.get('author')
      };
      this.set('updateAnswerForm', false);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});

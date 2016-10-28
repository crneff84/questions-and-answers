import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,

  actions: {
    questionFormShow() {
      this.set('addNewQuestion', true);
    },

    saveQuestion() {
      if(!this.get('inquiry')) {
        alert("Please Enter a Question")
      }else {
        var params = {
          inquiry: this.get('inquiry') ? this.get('inquiry'):"" ,
          author: this.get('author') ? this.get('author'):"",
          note: this.get('note') ? this.get('note'):""
        };
        this.set('questionFormShow', false);
        this.sendAction('saveQuestion', params);
      }
    }
  }
});

import DS from 'ember-data';

export default DS.Model.extend({
  inquiry: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  answers: DS.hasMany('answer', { async: true}),

  favorite: Ember.inject.service(),
  alreadyInList: Ember.computed('favorite.favoriteQuestions.[]', function() {
    return this.get('favorite').includes(this);
  })
});

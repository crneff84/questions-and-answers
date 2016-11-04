import Ember from 'ember';

export default Ember.Component.extend({
  favorite: Ember.inject.service(),

  actions: {
    removeFromFavorites(question) {
      this.get('favorite').remove(question);
    },
  }
});

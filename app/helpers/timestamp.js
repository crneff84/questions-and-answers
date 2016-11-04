import Ember from 'ember';

export function timestamp() {
  var timestamp = moment().format('MMMM Do YYYY, h:mm:ss');
  return timestamp;
}

export default Ember.Helper.helper(timestamp);

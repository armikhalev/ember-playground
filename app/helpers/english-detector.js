import Ember from 'ember';

export function englishDetector([lang]) {
  if (lang === 'english') {
    return 'It is an English awesome word';
  }
  return 'Esta es una palabra maravillosa espanola';
}

export default Ember.Helper.helper(englishDetector);

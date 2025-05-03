/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
      const words = (s1 + ' ' + s2).split(' ');
  const count = {};

  for (const word of words) {
    count[word] = (count[word] || 0) + 1;
  }

  return Object.keys(count).filter(word => count[word] === 1);
};
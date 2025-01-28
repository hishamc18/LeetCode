/**
 * @param {string[]} words
 * @return {string[]}
 */
function stringMatching(words) {
  const result = [];
  
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words.length; j++) {
      if (i !== j && words[j].includes(words[i])) {
        result.push(words[i]);
        break;
      }
    }
  }
  
  return result;
}

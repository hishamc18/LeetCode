/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let leftZeros = 0, rightOnes = [...s].filter(ch => ch === '1').length;
    let maxScore = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === '0') leftZeros++;
        else rightOnes--;

        maxScore = Math.max(maxScore, leftZeros + rightOnes);
    }

    return maxScore;
};
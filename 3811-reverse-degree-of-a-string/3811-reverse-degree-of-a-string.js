/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    for(let i = 0; i < s.length; i++){
        let position = i + 1;
        revValue = 26 - (s.charCodeAt(i) - 97)
        sum += position * revValue
    }

    return sum
};
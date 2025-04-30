/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let count = 0
    total = s.length;
    for(let i = 0; i < total; i++){
        if(s[i] == letter){
            count++
        }
    }
    let res = count / total * 100;
    return Math.floor(res)
};
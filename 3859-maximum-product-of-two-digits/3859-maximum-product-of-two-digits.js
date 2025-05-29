/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    let a = String(n).split("").sort((a,b) => b-a)
    return a[0] * a[1]
};
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let total = 0; monday = 1;
    for(let i = 0; i < n; i++){
        total += monday + (i % 7)
        if(i % 7 == 6) monday++
    }
    return total
};
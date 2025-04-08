/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    if(nums.includes(0)) return 0
    let a = nums.reduce((acc,val) => acc * val)
    return a > 0 ? 1 : a == 0 ? 0 : -1
};
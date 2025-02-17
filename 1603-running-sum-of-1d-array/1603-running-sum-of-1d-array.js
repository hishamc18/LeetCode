/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let sum = 0
    let result = [];
    for(let i = 0; i<nums.length; i++){
        result.push(sum += nums[i])
    }
    return result
};
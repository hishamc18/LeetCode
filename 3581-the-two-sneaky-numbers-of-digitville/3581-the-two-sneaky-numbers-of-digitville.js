/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    let filtered = nums.filter((elem,index) => nums.indexOf(elem) != index)
    return filtered
};
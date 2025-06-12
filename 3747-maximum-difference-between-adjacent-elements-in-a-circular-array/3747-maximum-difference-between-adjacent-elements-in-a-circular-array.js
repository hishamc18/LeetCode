/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAdjacentDistance = function(nums) {
    let maximumDiff = 0
    for(let i = 0; i < nums.length; i++){
        const adjacent = (i + 1) % nums.length;
        const diff = Math.abs(nums[i] - nums[adjacent])
        if(diff > maximumDiff){
            maximumDiff = diff
        }
    }
    return maximumDiff
};
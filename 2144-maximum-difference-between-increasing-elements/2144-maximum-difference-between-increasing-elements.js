/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    let minNumber = nums[0];
    let maxDiff = -1

    for(let i = 1; i < nums.length; i++){
        if(nums[i] > minNumber){
            diff = nums[i] - minNumber;
            if(diff > maxDiff){
                maxDiff = diff
            }
        } else {
            minNumber = nums[i]
        }
    }
    return maxDiff
};
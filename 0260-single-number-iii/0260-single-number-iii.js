/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
   let res = [];
   for(let i = 0; i < nums.length; i++){
    if(nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
        res.push(nums[i])
    }
   } 
   return res
};
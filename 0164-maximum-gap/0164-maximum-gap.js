var maximumGap = function(nums) {
    if(nums.length <=1) return 0
    let sorted = nums.sort((a,b) => a-b)
    let maxDistance = []
    for(let i = 0; i < sorted.length-1; i++){
        maxDistance.push(sorted[i+1] - sorted[i])
    }
    return Math.max(...maxDistance)
};
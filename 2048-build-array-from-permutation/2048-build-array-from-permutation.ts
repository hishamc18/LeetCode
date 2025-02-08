function buildArray(nums: number[]): number[] {
    let a = nums.map(elem  => nums[elem])
    return a
};
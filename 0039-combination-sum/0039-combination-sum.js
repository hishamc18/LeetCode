/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []

    const backTrack = (start, sum, path) => {
        if(sum == target){
            result.push([...path])
            return
        }
        if(sum > target) return

        for(let i = start; i < candidates.length; i++){
            backTrack(i, sum + candidates[i], [...path, candidates[i]])
        }
    }

    backTrack(0,0,[])
    return result
};
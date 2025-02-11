/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
        let sortedHeight = heights.toSorted((a,b) => a-b)
    let count = 0

    for(let i = 0; i < sortedHeight.length; i++){
      if(sortedHeight[i] != heights[i]){
         count++
      }
    }
    return count
};
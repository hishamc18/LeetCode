/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function(s, goal) {
    if(s.length != goal.length) return false
    if((s+s).includes(goal)){
        return true
    }
    return false
};
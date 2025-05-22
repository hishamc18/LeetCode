/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
        let pair = []
    for(let i = 0; i < names.length; i++){
        pair.push([names[i], heights[i]])
    }

    let sorted = pair.sort((a,b) => b[1] - a[1])
    return sorted.map(name => name[0])
};
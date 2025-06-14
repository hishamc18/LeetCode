/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let pTriangle = [];

    for (let i = 0; i < numRows; i++) {
        let row = [];

        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) {
                row.push(1)
            } else {
                row.push(pTriangle[i - 1][j - 1] + pTriangle[i - 1][j])
            }
        }
        pTriangle.push(row)
    }
    return pTriangle
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
    const result = [];

    for (let i = left; i <= right; i++) {
        const digits = String(i).split('')
        if (digits.every(d => d !== '0' && i % Number(d) === 0)) {
            result.push(i);
        }
    }

    return result;
};
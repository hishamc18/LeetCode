// // 2544. Alternating Digit Sum
// var alternateDigitSum = function(n) {
//     let a = n.toString().split("").map(Number);
//     let result = 0;

//     for (let i = 0; i<a.length; i++){
//         if(i % 2 == 0){
//             result += a[i]
//         }
//         else {
//             result -= a[i]
//         }
//     }
//     return result
// };
// console.log(alternateDigitSum(521));



// 1979. Find Greatest Common Divisor of Array
// function gcd(a,b){
//     if(b == 0){
//         return a
//     }
//         return gcd(b, a % b)
// }
// var findGCD = function(nums) {
//     minNum = Math.min(...nums)
//     maxNum = Math.max(...nums)
//     return gcd(maxNum, minNum)
// };
// console.log(findGCD([5,6,9,10]));


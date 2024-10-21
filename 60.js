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
//1
// //Two sum
// var twoSum = function(nums, target) {
//     for(i = 0; i<nums.length; i++){
//         for(j = i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// };


//2
// //median of two arrays
// var findMedianSortedArrays = function(nums1, nums2) {
//     let a = nums1.concat(nums2).sort((a,b) => a-b)
//     let length = a.length
//     if (length % 2 === 1) {
//         return a[Math.floor(length / 2)];
//     } else {
//         let mid1 = a[length / 2 - 1];
//         let mid2 = a[length / 2];
//         return (mid1 + mid2) / 2;
//     }
// };


//3
// //longest palindromic substring
// var longestPalindrome = function(str) {
//     if(str.length < 1 || str === null) return "";
//     let longest = "";
//     for(let i = 0; i<str.length; i++){
//         let oddPalindrome = expandFromCenter(str, i, i);
//         let evenPalindrome = expandFromCenter(str, i-1, i);

//         if(oddPalindrome.length > longest.length){
//             longest = oddPalindrome;
//         }
//             if(evenPalindrome.length > longest.length){
//             longest = evenPalindrome;
//         }
//     }
//             return longest;
// }
// function expandFromCenter(str, left, right){
//     let i = 0;
//     while (str[left - i] && str[left - i] === str[right + i]){
//         i++;
//     }
//     i--;
//     return (str.slice(left - i, right + i + 1));
// }


//4
// //reverse integer
// var reverse = function(x) {
//     const INT_MIN = -2147483648;
//     const INT_MAX = 2147483647;
//     let isNegative = x < 0;
//     let reversed = Number(Math.abs(x).toString().split("").reverse().join(""));
//     if (isNegative) {
//         reversed = -reversed;
//     }
//     if (reversed < INT_MIN || reversed > INT_MAX) {
//         return 0;
//     }
//     return reversed;
// };


//5
// //palindrome number
// var isPalindrome = function(x) {
//     let a = String(x).split(" ").filter(word => word == word.split("").reverse().join(""))
//     if(a.length === 0){
//         return false   
//     }
//     else{
//         return true        
//     }
// };


//6
// // roman to integer
// var romanToInt = function(s) {
//     const map = {'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000};
//     return s.split('').reduce((acc, char, i) => {
//         const value = map[char];
//         return acc + (value < map[s[i + 1]] ? -value : value);
//     }, 0);
// };


//7
// //remove duplicates from sorted array
// var removeDuplicates = function(nums) {
//     if (nums.length === 0) return 0;
//     let i = 0;
//     for (let j = 1; j < nums.length; j++) {
//         if (nums[j] !== nums[i]) {
//             i++;
//             nums[i] = nums[j];
//         }
//     }
//     return i + 1;
// };


//8
// //Find the Index of the First Occurrence in a String
// var strStr = function(haystack, needle) {
//     return haystack.search(needle)  
// };


//9
// //divide two integers
// var divide = function(dividend, divisor) {
//     if (dividend === -2147483648 && divisor === -1) {
//         return 2147483647; // Max 32-bit signed integer value
//     }
//     else{
//             let a = dividend / divisor
//     return Math.trunc(a)
//     }
// };



//10
// //first missing positive
// var firstMissingPositive = function(nums) {
//     let a = nums.filter(x => x>0).sort((a,b) => a-b);
//     let b = new Set(a)
//     let c = [...b]
//     console.log(c);
    
//     for(i=0; i<Infinity; i++){
//     if(c[i] != i+1) return i+1
//     }
// };



//11
// //pow(x,n)
// var myPow = function(x, n) {
//     return Math.pow(x,n)
// };



//12
// //length of last word
// var lengthOfLastWord = function(s) {
//     let a = s.split(" ").filter(x => x.length > 0)
//     let b = a.length
//     return a[b-1].length;
// };



//13
// //plus one
// var plusOne = function(digits) {
//     for (let i = digits.length - 1; i >= 0; i--) {
//         if (digits[i] < 9) {
//             digits[i]++;
//             return console.log(digits);
//         }
//         digits[i] = 0;
//     }
//     digits.unshift(1);
//     return console.log(digits);
// };
// plusOne([9])  //[1,0]



//14
// //
// var addBinary = function(a, b) {
//     return (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);
// };



//15
// //single number
// var singleNumber = function(nums) {
//     for(i = 0; i<nums.length; i++){
//         if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
//             return nums[i]
//         }
//     }
// };



//16
// //Largest Number
// var largestNumber = function(nums) {
//     let a = nums.map(x => x.toString()).sort((a,b)=>(b+a)-(a+b)).join("")
//     if(a[0] === "0") return "0"
//     else return a
// };



//17
// //remove element (return the lenght of the array)
// var removeElement = function(nums, val) {
//     let i = 0;
//     for (let j = 0; j < nums.length; j++) {
//         if (nums[j] !== val) {
//             nums[i++] = nums[j];
//         }
//     }
//     console.log(nums);
//     return console.log(i);
// };
// removeElement([3,2,2,3],3)


//18
// // //fund the duplicate number
// function findDuplicates(arr) {
//     const seen = new Set();
//     const duplicates = new Set();
    
//     arr.forEach(item => {
//       if (seen.has(item)) {
//         duplicates.add(item);
//       } else {
//         seen.add(item);
//       }
//     });
    
//     return [...duplicates];
//   }
  
//   const arr = [1, 2, 3, 4, 2, 5, 6, 3];
//   console.log(findDuplicates(arr)); // Output: [2, 3]

//meth0d - 2
// function findDuplicates(arr){
//     let a = arr.filter((num,index) => arr.indexOf(num) !== index)
//     console.log(a);
    
// }
// findDuplicates([1,2,1,5,2])



//19
// //longest consecutive sequence
// function longestConsecutive(nums) {
//     let oddSet = new Set(nums);
//     let long = 0;

//     for (let n of oddSet) {
//         if (!oddSet.has(n - 1)) {
//             let currentNum = n;
//             let length = 1;

//             while (oddSet.has(currentNum + 1)) {
//                 currentNum = currentNum + 1;
//                 length = length + 1;
//             }

//             long = Math.max(long, length);
//         }
//     }
//     return long;
// }
// console.log(longestConsecutive([1,3]));



//20
// //integer ro Roman
// function intToRoman(num) {
//     const roman = [
//       { val: 1000, symbol: 'm' },
//       { val: 900, symbol: 'cm' },
//       { val: 500, symbol: 'd' },
//       { val: 400, symbol: 'cd' },
//       { val: 100, symbol: 'c' },
//       { val: 90, symbol: 'xc' },
//       { val: 50, symbol: 'l' },
//       { val: 40, symbol: 'xl' },
//       { val: 10, symbol: 'x' },
//       { val: 9, symbol: 'ix' },
//       { val: 5, symbol: 'v' },
//       { val: 4, symbol: 'iv' },
//       { val: 1, symbol: 'i' }
//     ];
  
//     let result = '';

//     for (const { val, symbol } of roman) {
//       while (num >= val) {
//         result += symbol;
//         num -= val;
//       }
//     }
  
//     return result.toUpperCase();
//   }

// console.log(intToRoman([3749]));


//21
// //Missing Number
// function missingNumber(nums) {
//     let n = nums.length;
//     let expectedSum = (n * (n + 1)) / 2;
//     let actualSum = nums.reduce((acc, num) => acc + num, 0);
//     console.log(expectedSum - actualSum);
//   }
// missingNumber([0,1,2])
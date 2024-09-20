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


//22
//valid palindrome
// function validePalindrome (s){
//     let a = s.toLowerCase().replace(/[^a-z0-9]/g, '')
//     let b = a.split("").reverse().join("")
//     if(a === b) return true
//     else return false
// }
// validePalindrome("A man, a plan, a canal: Panama");


//23
//maximum number in given number. only can change the one digit to 9
// function maximum(num){
//     let a = String(num).split("")

//     for(i=0; i<a.length; i++){
//         if(a[i] != 9){
//             a[i] = 9
//             break;
//         }      
//     }
//     return parseInt(a.join(""))
// }
// maximum(9669)

//24
//sum of unique
// function sumUnique(nums) {
//     let a = []
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) {
//             a.push(sum += nums[i])
//         }
//     }
//     if ((a[a.length - 1]) === undefined) {
//         return 0
//     }
//     else {
//         return a[a.length - 1]
//     }
// }
// console.log(sumUnique([1, 2, 3, 2]));
// console.log(sumUnique([1, 1, 1, 1, 1]));


//25
//method 2 of above
// function uniqueSum (nums) {
//     let a = nums.filter((x,i)=> nums.indexOf(x) === nums.lastIndexOf(x)).reduce((acm, val)=> acm + val ,0)
//     console.log(a);
// }
// uniqueSum([1,2,3,2])


//26
//secondLargest number in a string
// function scl (s){
//     let a = s.replace(/[^0-9]/g, '').split("").sort((a,b) =>a-b)
//     let b = a.filter((x,i)=> a.indexOf(x) === i)
//     if(b.length <= 1){
//         console.log(-1);
//     }
//     else{
//       console.log(b[b.length-2]);
//     }
// }
// scl("abc01111")


//27
//convert date to binary (string to string)
// function convertDateToBinary (date) {
//     let a = date.split("-").map(x => Number(x).toString(2)).join("-");
//     return a
// };
// convertDateToBinary("2080-02-29")


//28
// Harshad Number
// function sumOfTheDigitsOfHarshadNumber (x) {
//     let a = x.toString().split("").map(Number).reduce((acm, val) => acm + val ,0)
//     if(x % a === 0) return Number(a)
//     else return -1
// };
// console.log(sumOfTheDigitsOfHarshadNumber(23));


//29
//Number of 1s from 1 to n    (number.of 1s from 1 to n)
// function countDigitOne (n) {
//     let a = []
//     for(i = 1; i<=n; i++){
//         a.push(i)        
//     }
//     let b = a.join("").split("").filter(x => x ==1).length
//     return b
// };
// countDigitOne(824883294);



//30
//reverse a string
// function reverseWords (s) {
//     let a = s.split(" ").filter((x) => x.length > 0).reverse().join(" ")
//     console.log(a);
// };
// reverseWords("a good   example")


//31
//merge string alternately
// function mergeAlternately(word1, word2) {
//     let merged = "";
//     let i = 0, j = 0;

//     while (i < word1.length || j < word2.length) {
//         if (i < word1.length) {
//             merged += word1[i];
//             i++;
//         }
//         if (j < word2.length) {
//             merged += word2[j];
//             j++;
//         }
//     }
//     console.log(merged);
    
// };
// mergeAlternately("abc","pqr")


//32
//number of changing keys
// function countKeyChanges (s) {
//     let a = s.toLowerCase()
//     let count = 0
//     console.log(a);
//     for (let i = 0; i < a.length; i++) {
//         if(a.at(i) != a.at(i+1)){
//             count++
//         }
//     }
//     console.log(count-1);
// };
// countKeyChanges("AaAaAaaA")


//33
//find the repeated and missing
// function findMissingAndRepeatedValues(grid) {
//     let a = grid.flat(Infinity)
//     k = 0
//     var repeated =[]
//     for(let i=0;i<a.length; i++){
//         for(k = i+1; k<a.length; k++){
//             if(a[i]==a[k]){
//                 repeated.push(a[i])
//         }
//         }
//     }
    

//     let c = a.filter((x,i) => a.indexOf(x) == i).sort((a,b)=>a-b)
//     let missing = []
//     for(let j = 1; j <=c.length+1; j++){
//         if(!c.includes(j)){
//             missing.push(j)
//         }
//     }
//     let last = repeated.concat(missing)
//     console.log(last);
    
// };
// findMissingAndRepeatedValues([[1,3],[2,2]])
// findMissingAndRepeatedValues([[9,1,7],[8,9,2],[3,4,6]])



//34
//Faulty Keyboard.  reverse the string when 'i' comes
// function finalString (s) {
//     let result = "";
//     for(let i = 0; i<s.length; i++){
//         if(s.at(i) == 'i'){
//             result = result.split("").reverse().join("")
//         }else{
//             result += s.at(i)
//         }
//     }
//     console.log(result);
// };
// finalString("string")



//35
//split strings by seperator
// function splitWordsBySeparator (words, separator) {
//     let a = words.join(separator).split(separator).filter((x) => x.length > 0)
//     console.log(a);
    
// };

// splitWordsBySeparator(["one.two.three","four.five","six"], ".")
// splitWordsBySeparator(["$easy$","$problem$"], "$")

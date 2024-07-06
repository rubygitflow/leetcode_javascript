// https://leetcode.com/problems/single-number/
// 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberIII = function(nums) {
  return nums.reduce((out, num) => {return out^num;});
};


console.log("Single Number (reduce)")
console.log(singleNumberIII([2,2,1,1,1]))
// Output: 1
console.log(singleNumberIII([2,2,1]))
// Output: 1
console.log(singleNumberIII([4,1,2,1,2]))
// Output: 4
console.log(singleNumberIII([1]))
// Output: 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let out = 0; 
  for (let num of nums) {
    out ^= num;
  }
  return out
};


console.log("Single Number")
console.log(singleNumber([2,2,1,1,1]))
// Output: 1
console.log(singleNumber([2,2,1]))
// Output: 1
console.log(singleNumber([4,1,2,1,2]))
// Output: 4
console.log(singleNumber([1]))
// Output: 1


// #######################
// https://leetcode.com/problems/single-number-ii/description/
// 137. Single Number II

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumberII = function(nums) {
  let count = {};
  for(let x of nums) count[x] = (count[x] != null) ? count[x]+1 : 1;
  for(let x in count) if(count[x] === 1) return Number(x);
  return 0;
};

console.log("Single Number II")
console.log(singleNumberII([2,2,3,2]))
// Output: 3
console.log(singleNumberII([0,1,0,1,0,1,99]))
// Output: 99
console.log(singleNumberII([0,1,0,1,0,1]))
// Output: 0

module.exports = { singleNumber, singleNumberII, singleNumberIII };

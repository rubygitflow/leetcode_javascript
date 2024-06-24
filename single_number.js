// https://leetcode.com/problems/single-number/
// 136. Single Number

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

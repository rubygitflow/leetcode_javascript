// https://leetcode.com/problems/find-triangular-sum-of-an-array/description/
// 2221. Find Triangular Sum of an Array

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
  let len = nums.length - 1,
      res = [...nums];
  while (0 < len) {
    for (let i = 0; i < len; i++) {
      res[i] = (res[i] + res[i + 1]) % 10;
    }
    len--;
  }
  return res[0];
};

console.log(triangularSum([1,2,3,4,5]));
// Output: 8
console.log(triangularSum([5]));
// Output: 5

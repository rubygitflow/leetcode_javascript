// https://leetcode.com/problems/contains-duplicate/description/
// 217. Contains Duplicate

// Time complexity: O(n)
// Space complexity: O(n)
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  // const s = new Set(nums);
  // return s.size !== nums.length
  let visited = new Set();
  for (const num of nums) {
    if (visited.has(num)) return true;
    visited.add(num);
  }
  return false
};

console.log(containsDuplicate([1,2,3,1]))
// Output: true
console.log(containsDuplicate([1,2,3,4]))
// Output: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
// Output: true

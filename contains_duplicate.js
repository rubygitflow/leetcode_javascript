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
  // No need to interate through the entire list. We return a boolean at the first duplicate
  let visited = new Set();
  for (const num of nums) {
    if (visited.has(num)) return true;
    visited.add(num);
  }
  return false
};

console.log("Contains Duplicate (set)")
console.log(containsDuplicate([1,2,3,1]))
// Output: true
console.log(containsDuplicate([1,2,3,4]))
// Output: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))
// Output: true


// ###################
// https://leetcode.com/problems/contains-duplicate-ii/description/
// 219. Contains Duplicate II

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const visited = new Map();
    for (let idx = 0; idx < nums.length; idx++) {
        if (visited.has(nums[idx]) && idx - visited.get(nums[idx]) <= k) return true;

        visited.set(nums[idx], idx);
    }
    return false;
};

console.log("Contains Duplicate II")
console.log(containsNearbyDuplicate([1,2,3,1], 3))
// Output: true
console.log(containsNearbyDuplicate([1,0,1,1], 1))
// Output: true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2))
// Output: false

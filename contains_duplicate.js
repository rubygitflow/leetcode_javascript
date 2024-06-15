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


// ###################
// https://leetcode.com/problems/contains-duplicate-iii/description/
// 220. Contains Duplicate III


/**
 * @param {number[]} nums
 * @param {number} indexDiff
 * @param {number} valueDiff
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, indexDiff, valueDiff) {
  if (valueDiff < 0 || indexDiff < 1 || nums.length < 1 ) return false;

  const nearby = valueDiff + 1;
  const visited = new Map();
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const idx = Math.floor(num / nearby);
    if (
          (visited.has(idx) && i - visited.get(idx)[0] <= indexDiff) ||
          (visited.has(idx-1) &&
          i - visited.get(idx-1)[0] <= indexDiff &&
          Math.abs(num - visited.get(idx-1)[1]) <= valueDiff) ||
          (visited.has(idx+1) &&
          i - visited.get(idx+1)[0] <= indexDiff &&
          Math.abs(num - visited.get(idx+1)[1]) <= valueDiff)
       ) return true;
    visited.set(idx, [i, num])
  }
  return false
};

console.log("Contains Duplicate III")
console.log(containsNearbyAlmostDuplicate([1,2,3,1], 3, 0))
// Output: true
console.log(containsNearbyAlmostDuplicate([1,5,9,1,5,9], 2, 3))
// Output: false
console.log(containsNearbyAlmostDuplicate([], 2, 3))
// Output: false

// https://leetcode.com/problems/two-sum/description/
// 1. Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numToIndex = new Map(); // Create a Map to store numbers and their indices
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        // Check if the complement exists in the Map
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        // Store the current number and its index in the Map
        numToIndex.set(nums[i], i);
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));
// Output: [0,1]
console.log(twoSum([3,2,4], 6));
// Output: [1,2]
console.log(twoSum([3,3], 6));
// Output: [0,1]
console.log(twoSum([3,3], 5));
// Output: []

// ***************************
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
// 167. Two Sum II - Input Array Is Sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSumSorted = function(numbers, target) {
    let l = 0
    let r = numbers.length - 1
    while (l < r) {
        sum = numbers[l] + numbers[r]
        if (sum === target) return [l + 1, r + 1];
        if (sum > target) r--; else l++;
    }
    return []
};

console.log(twoSumSorted([2,7,11,15], 9));
// Output: [1,2]
console.log(twoSumSorted([2,3,4], 6));
// Output: [1,3]
console.log(twoSumSorted([-1,0], -1));
// Output: [1,2]
console.log(twoSumSorted([3,3], 5));
// Output: []
console.log(twoSumSorted([2,7,11,15,15,16,17,18,19,20,21,22,23,24,25], 46));
// Output: [11,15]

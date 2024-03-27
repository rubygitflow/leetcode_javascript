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

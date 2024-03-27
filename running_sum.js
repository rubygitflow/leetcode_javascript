// https://leetcode.com/problems/running-sum-of-1d-array/description/
// 1480. Running Sum of 1d Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let output = new Array(nums.length)
    output[0] = nums[0];
    // Traverse all elements through the for loop...
    for(let idx = 1; idx < nums.length; idx++) {
        // Storing the running sum...
        output[idx] = output[idx-1] + nums[idx];
    }
    // Return the running sum of nums...
    return output;      
};

console.log(runningSum([1,2,3,4]));
// Output: [1,3,6,10]
console.log(runningSum([1,1,1,1,1]));
// Output: [1,2,3,4,5]
console.log(runningSum([3,1,2,10,1]));
// Output: [3,4,6,16,17]

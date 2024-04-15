// https://leetcode.com/problems/squares-of-a-sorted-array/description/
// 977. Squares of a Sorted Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let left = 0, right = nums.length - 1, k = nums.length - 1;
    let res = new Array(nums.length);
    while (left <= right) {
        let value;
        if (Math.abs(nums[left]) > Math.abs(nums[right])) {
            value = nums[left] * nums[left++];
        } else {
            value = nums[right] * nums[right--];
        }
        res[k--] = value;
    }
    return res;
};

console.log(sortedSquares([-4,-1,0,3,10]));
// Output: [0,1,9,16,100]
console.log(sortedSquares([-7,-3,2,3,11]));
// Output: [4,9,9,49,121]

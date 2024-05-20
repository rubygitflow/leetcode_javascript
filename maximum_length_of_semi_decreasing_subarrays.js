// https://leetcode.com/problems/maximum-length-of-semi-decreasing-subarrays/description/
// 2863. Maximum Length of Semi-Decreasing Subarrays

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarrayLengthDec = function(nums) {
    const n = nums.length;
    let d = new Map();
    for (let i = 0; i < n; i++) d.set(nums[i], []);
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        d.get(num).push(i);
    };
    // Decreasing array
    const keys = Array.from(d.keys()).sort((a, b) => b - a);
    let ans = 0;
    let k = Infinity;
    for (const x of keys) {
        const idx = d.get(x);
        ans = Math.max(ans, idx.at(-1) - k + 1);
        k = Math.min(k, idx[0]);
    }
    return ans;
}

var maxSubarrayLengthInc = function(nums) {
    const n = nums.length;
    let d = new Map();
    for (let i = 0; i < n; i++) d.set(nums[i], []);
    for (let i = 0; i < n; i++) {
        const num = nums[i];
        d.get(num).push(i);
    };
    // Increasing array
    const keys = Array.from(d.keys()).sort((a, b) => a - b);
    let ans = 0;
    let k = Infinity;
    for (const x of keys) {
        const idx = d.get(x);
        ans = Math.max(ans, idx.at(-1) - k + 1);
        k = Math.min(k, idx[0]);
    }
    return ans;
}

console.log("Semi-Decreasing Subarrays")
console.log(maxSubarrayLengthDec([7,6,5,4,3,2,1,6,10,11]));
// Output: 8
console.log(maxSubarrayLengthDec([57,55,50,60,61,58,63,59,64,60,63]));
// Output: 6
console.log(maxSubarrayLengthDec([57,55,50,60,61,58,63,59,64,58,63]));
// Output: 7
console.log(maxSubarrayLengthDec([1,2,3,4]));
// Output: 0
console.log(maxSubarrayLengthDec([10,12,12,11,11]));
// Output: 4

console.log("Semi-Increasing Subarrays")
console.log(maxSubarrayLengthInc([11,10,6,1,2,3,4,5,6,7]));
// Output: 8
console.log(maxSubarrayLengthInc([63,59,64,60,63,55,57,50,60,61,58,]));
// Output: 9
console.log(maxSubarrayLengthInc([57,55,50,60,61,58,63,59,64,58,63]));
// Output: 11
console.log(maxSubarrayLengthInc([1,2,3,4]));
// Output: 4
console.log(maxSubarrayLengthInc([101,92,53,4]));
// Output: 0
console.log(maxSubarrayLengthInc([11,11,12,12,10]));
// Output: 4

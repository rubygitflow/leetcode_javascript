// https://leetcode.com/problems/3sum/description/
// 15. 3Sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let output = [],
        target = 0;
    if (nums.length < 3) return output;    

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > target) break;

        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = nums.length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum > target) {
                r--;
            } else if (sum < target) {
                l++;
            } else {
                output.push([nums[i], nums[l], nums[r]]);
                let lOccurrence = nums[l];
                let rOccurrence = nums[r];
                // skip duplicates               
                while (l < r && nums[l] === lOccurrence) l++;
                while (l < r && nums[r] === rOccurrence) r--;
            }
        }
    }
    return output;
};

console.log(threeSum([-1,0,1,2,-1,-4]));
// Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0,1,1]));
// Output: []
console.log(threeSum([0,0,0]));
// Output: [[0,0,0]]

var threeSumEx = function(nums) {
    nums.sort((a, b) => a - b); // Sorted Array
    let output = [],
        target = 0;
    if (nums.length < 3) return output;
    if (nums[0] > target) return output;

    let hashMap = new Map();
    for (let i = 0; i < nums.length; ++i) hashMap.set(nums[i], i);
    for (let i = 0; i < nums.length - 2; ++i) {
        if (nums[i] > target) break;

        for (let j = i + 1; j < nums.length - 1; ++j) {
            let complement = -1 * (nums[i] + nums[j]);
            if (hashMap.has(complement) && hashMap.get(complement) > j) {
                output.push([nums[i], nums[j], complement]);
            }
            j = hashMap.get(nums[j]);
        }
        i = hashMap.get(nums[i]);
    }
    return output;
};

console.log(threeSumEx([-1,0,1,2,-1,-4]));
// Output: [[-1,-1,2],[-1,0,1]]
console.log(threeSumEx([0,1,1]));
// Output: []
console.log(threeSumEx([0,0,0]));
// Output: [[0,0,0]]

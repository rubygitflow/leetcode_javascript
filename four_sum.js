// https://leetcode.com/problems/4sum/description/
// 18. 4Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    let output = [];

    // k represents N-sum, 
    // if k = 3 : 3Sum, if k = 4 : 4Sum, if k = 5, 5Sum; 
    function recurse(arr, tar, res, k) {
        if(k === 2) {
            twoSum(arr, tar, res);
            return;
        }
        for(let i = 0; i < arr.length; i++) {
            while(arr[i] === arr[i-1]) i++;
            recurse(arr.slice(i+1), tar - arr[i], [...res, arr[i]], k-1);
        }
    }
    
    function twoSum(arr, tar, res) {
        let l = 0, r = arr.length-1;
        while(l < r) {
            const sum = arr[l] + arr[r];
            if(sum === tar)  {
                output.push([...res, arr[l], arr[r]]);
                while(arr[l] === arr[l+1]) l++;
                while(arr[r] === arr[r-1]) r--;
                l++;
                r--;
            } else if(sum < tar) l++;
            else r--;
        }
    }
    
    recurse(nums, target, [], 4)
    return output
};

console.log(fourSum([1,0,-1,0,-2,2],0));
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2],8));
// Output: [[2,2,2,2]]
console.log(fourSum([2,2,2,2,2],9));
// Output: []

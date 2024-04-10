// https://leetcode.com/problems/binary-search/description/
// 704. Binary Search

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] === target) return mid
        // left direction
        if(target < nums[mid]) r = mid - 1
        // right direction
        else l = mid + 1
    }
    return - 1
};

console.log('Binary Search');
console.log(search([-1,0,3,5,9,12], 9));
// Output: 4
console.log(search([-1,0,3,5,9,12], 2));
// Output: -1

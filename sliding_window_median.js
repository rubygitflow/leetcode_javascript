// https://leetcode.com/problems/sliding-window-median/
// 480. Sliding Window Median

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    let res = [],
        main_win =[],
        copy_win = [],
        odd = k % 2 === 1,
        median_index = odd ? Math.floor(k / 2) : k / 2 - 1,
        median_index_next = median_index + 1;
    if (nums.length < k) return res
    // Create and sort window
    main_win = nums.slice(0, k);
    copy_arr = [...main_win].sort((a, b) => a - b);
    for(let i=k;i<nums.length;i++){
        const median = odd 
            ? copy_arr[median_index]
            : (copy_arr[median_index] + copy_arr[median_index_next]) / 2
        res.push(median);
        main_win.shift();
        main_win.push(nums[i]);
        copy_arr = [...main_win].sort((a, b) => a - b);
    }
    const median = odd 
        ? copy_arr[median_index]
        : (copy_arr[median_index] + copy_arr[median_index_next]) / 2
    res.push(median);
    return res
};

console.log("Sliding Window Median")
console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// Output: [1.00000,-1.00000,-1.00000,3.00000,5.00000,6.00000]
console.log(medianSlidingWindow([1,2,3,4,2,3,1,4,2], 3));
// Output: [2, 3, 3, 3, 2, 3, 2]
console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 4));
// Output: [0.0, 1.0, 1.0, 4.0, 5.5]
console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 1));
// Output: [1,3,-1,-3,5,3,6,7]
console.log(medianSlidingWindow([1,3,-1,-3,5,3,6,7], 10));
// Output: []

// https://leetcode.com/problems/longest-consecutive-sequence/description/
// 128. Longest Consecutive Sequence

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const srt = new Set(nums);
  let max_arr = 0;
  for (const n of nums) {
    if (!srt.has(n - 1)) {
      let length = 1;
      while (srt.has(n + length)) length++;
      max_arr = Math.max(max_arr, length);
    }
  }
  return max_arr;    
};

console.log(longestConsecutive([100,4,200,1,3,2]))
// Output: 4
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]))
// Output: 9
console.log(longestConsecutive([0,3,17,12,5,8,14,26,0,21]))
// Output: 1

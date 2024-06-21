// https://leetcode.com/problems/container-with-most-water/description/
// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0;
  let j = height.length - 1;
  let out = 0;
  while (i < j) {
    out = Math.max(out, Math.min(height[i], height[j]) * (j - i));
    if (height[i] < height[j]) {
      ++i;
    } else {
      --j;
    }
  }
  return out;
};

console.log("Container With Most Water")
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// Output: 49
console.log(maxArea([1,1]))
// Output: 1

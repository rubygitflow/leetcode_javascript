// https://leetcode.com/problems/container-with-most-water/description/
// 11. Container With Most Water

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let l = 0;
  let r = height.length - 1;
  let out = 0;
  while (l < r) {
    out = Math.max(out, Math.min(height[l], height[r]) * (r - l));
    if (height[l] < height[r]) {
      ++l;
    } else {
      --r;
    }
  }
  return out;
};

console.log("Container With Most Water")
console.log(maxArea([1,8,6,2,5,4,8,3,7]))
// Output: 49
console.log(maxArea([1,1]))
// Output: 1


// ########################
// https://leetcode.com/problems/trapping-rain-water/description/
// 42. Trapping Rain Water

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let l = 0,
      r = height.length - 1;
  let lMax = 0,
      rMax = 0;
  let totalWater = 0;
  while (l < r) {
    // when the left pointer has more height than left max
    // assign the left max to height at left
    if (height[l] <= height[r]) {
      if (height[l] >= lMax) {
        lMax = height[l];
      } else {
        // if the height is less than left max
        // it means it can entrap water so adding this to total water
        totalWater += lMax - height[l];
      }
      ++l;
    } else {
      if (height[r] >= rMax) {
        rMax = height[r];
      } else {
        totalWater += rMax - height[r];
      }
      --r;
    }
  }
  return totalWater;
};

console.log("Trapping Rain Water")
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))
// Output: 6
console.log(trap([4,2,0,3,2,5]))
// Output: 9

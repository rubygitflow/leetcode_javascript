// https://leetcode.com/problems/jump-game/description/
// 55. Jump Game

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let as_far_as_possible = 0;
  for (let i = 0; i < nums.length; i++) {
    if (as_far_as_possible < i) return false

    as_far_as_possible = Math.max(as_far_as_possible, i + nums[i])
  }
  return true;
};


console.log("Jump Game")
console.log(canJump([2,3,1,1,4]))
// Output: true
console.log(canJump([3,2,1,0,4]))
// Output: false

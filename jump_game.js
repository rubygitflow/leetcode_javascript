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


// ########################
// https://leetcode.com/problems/jump-game-vii/
// 1871. Jump Game VII

/**
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function (s, minJmp, maxJmp) {
  let n = s.length;
  let canReach = new Array(n).fill(0);
  let [from, to] = [0, 1];
  canReach[from]++;
  if (to < n) canReach[to]--;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += canReach[i];
    canReach[i] = sum;
    if (canReach[i] === 1 && s[i] === "0") {
      let [from, to] = [i + minJmp, i + maxJmp + 1];
      if (from < n) canReach[from]++;
      if (to < n) canReach[to]--;
    }
  }
  return s[n - 1] === "0" && canReach[n - 1] === 1;
}

console.log("Jump Game VII")
console.log(canReach("011010", 2, 3))
// Output: true
console.log(canReach("01101110", 2, 3))
// Output: false

// https://leetcode.com/problems/minimum-time-to-make-rope-colorful/description/
// 1578. Minimum Time to Make Rope Colorful

/**
 * @param {string} colors
 * @param {number[]} neededTime
 * @return {number}
 */
var minCost = function(colors, neededTime) {
    let time = 0;
    const lc = colors.length,
          lt = neededTime.length;
    if (lc !== lt) {return -1};
    for (let i = 1; i < lc; i++) {
        if (colors[i] === colors[i - 1]) {
            time += Math.min(neededTime[i], neededTime[i - 1]);
            neededTime[i] = Math.max(neededTime[i], neededTime[i - 1]);
        }
    }
    return time;
};

console.log(minCost(
  "abaacs",
  [1,2,3,4,5]
));
Output: -1
console.log(minCost(
  "abaac",
  [1,2,3,4,5]
));
// Output: 3
console.log(minCost(
  "abc",
  [1,2,3]
));
// Output: 0
console.log(minCost(
  "aabaa",
  [1,2,3,4,1]
));
// Output: 2
console.log(minCost(
  "abaaac",
  [1,2,3,4,1,5]
));
// Output: 4

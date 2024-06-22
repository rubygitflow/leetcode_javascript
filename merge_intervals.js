// https://leetcode.com/problems/merge-intervals/description/
// 56. Merge Intervals

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let output = [];
  if (intervals.length > 0) output.push(intervals[0])
  for (let i = 1; i < intervals.length; i++) {
    const e = intervals[i];
    const last_ind = output.length -1;
    let [l, r] = output[last_ind];
    if (e[0] <= r && e[1] >= l) {
      output[last_ind] = [Math.min(e[0], l), Math.max(e[1], r)];
    } else {
      output.push(e);
    }
  }
  return output;    
};


console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// Output: [[1,6],[8,10],[15,18]]
console.log(merge([[1,3],[15,18],[2,6],[8,10]]))
// Output: [[1,6],[8,10],[15,18]]
console.log(merge([[1,4],[4,5]]))
// Output: [[1,5]]
console.log(merge([]))
// Output: []
console.log(merge([[-11,40],[1,4],[4,5]]))
// Output: [[-11,40]]

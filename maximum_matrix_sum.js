// https://leetcode.com/problems/maximum-matrix-sum/description/
// 1975. Maximum Matrix Sum

/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function(matrix) {
  let [total, cnt, mi] = [0, 0, Infinity];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      total += Math.abs(matrix[i][j]);
      mi = Math.min(mi, Math.abs(matrix[i][j]))
      if (matrix[i][j] < 0) cnt++;
    }
  }
  if (cnt % 2 === 1) total -= mi * 2;
  return total;
};


console.log(maxMatrixSum([[1,-1],[-1,1]]))
// Output: 4
console.log(maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]))
// Output: 16

module.exports = { maxMatrixSum };

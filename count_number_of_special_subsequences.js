// # https://leetcode.com/problems/count-number-of-special-subsequences/
// # 1955. Count Number of Special Subsequences
// # Explanation: https://algo.monster/liteproblems/1955

const mod = 10**9 + 7

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequences = function(nums) {
  let [total_zeros, total_ones, total_twos] = [0,0,0]
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) total_zeros = (total_zeros * 2 + 1) % mod
    if (nums[i] === 1) total_ones = (total_ones * 2 + total_zeros) % mod
    if (nums[i] === 2) total_twos = (total_twos * 2 + total_ones) % mod
  }
  return total_twos 
};

console.log("Count Number of Special Subsequences (FOR-loop)")
console.log(countSpecialSubsequences([0,1,2]))
// Output: 1
console.log(countSpecialSubsequences([0,1,2,0]))
// Output: 1
console.log(countSpecialSubsequences([0,1,2,2]))
// Output: 3
console.log(countSpecialSubsequences([2,2,0,0]))
// Output: 0
console.log(countSpecialSubsequences([0,1,2,0,1,2]))
// Output: 7

/**
 * @param {number[]} nums
 * @return {number}
 */
var countSpecialSubsequencesII = function(nums) {
  return nums.reduce(([total_zeros, total_ones, total_twos], n, idx) => {
    return [
      n === 0 ? total_zeros = (total_zeros * 2 + 1) % mod : total_zeros,
      n === 1 ? total_ones = (total_ones * 2 + total_zeros) % mod : total_ones,
      n === 2 ? total_twos = (total_twos * 2 + total_ones) % mod : total_twos,
    ];
  }, [0,0,0])[2];
};

console.log("Count Number of Special Subsequences (reduce)")
console.log(countSpecialSubsequencesII([0,1,2]))
// Output: 1
console.log(countSpecialSubsequencesII([0,1,2,0]))
// Output: 1
console.log(countSpecialSubsequencesII([0,1,2,2]))
// Output: 3
console.log(countSpecialSubsequencesII([2,2,0,0]))
// Output: 0
console.log(countSpecialSubsequencesII([0,1,2,0,1,2]))
// Output: 7

module.exports = { countSpecialSubsequences, countSpecialSubsequencesII };

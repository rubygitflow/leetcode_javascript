// https://leetcode.com/problems/count-and-say/description/
// 38. Count and Say
// https://en.wikipedia.org/wiki/Run-length_encoding
// Explanation: https://algo.monster/liteproblems/38

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let sequence = '1';
  for (let i = 1; i < n; i++) {
    let temp_sequence = '',
        index = 0;
    while (index < sequence.length) {
      let count_index = index;
      while (count_index < sequence.length && sequence[count_index] == sequence[index]) count_index++
      temp_sequence += count_index - index
      temp_sequence += sequence[index]
      index = count_index
    };
    sequence = temp_sequence
  }
  return sequence
};

console.log(countAndSay(4))
// Output: "1211"
console.log(countAndSay(1))
// Output: "1"
// console.log(countAndSay(10))
// // Output: "13211311123113112211"

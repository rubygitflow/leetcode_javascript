// https://leetcode.com/problems/count-numbers-with-unique-digits/description/
// 357. Count Numbers with Unique Digits
// Explanation: https://algo.monster/liteproblems/357

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n == 0) return 1
  let out = 10,
      cur = 9;
  for (let i = 0; i < (n-1); ++i) {
    cur *= 9 - i
    out += cur
  }
  return out
};

console.log(countNumbersWithUniqueDigits(0));
// Output: 1
console.log(countNumbersWithUniqueDigits(1));
// Output: 10
console.log(countNumbersWithUniqueDigits(2));
// Output: 91
console.log(countNumbersWithUniqueDigits(3));
// Output: 739
console.log(countNumbersWithUniqueDigits(4));
// Output: 5275
console.log(countNumbersWithUniqueDigits(5));
// Output: 32491
console.log(countNumbersWithUniqueDigits(6));
// Output: 168571
console.log(countNumbersWithUniqueDigits(7));
// Output: 712891
console.log(countNumbersWithUniqueDigits(8));
// Output: 2345851

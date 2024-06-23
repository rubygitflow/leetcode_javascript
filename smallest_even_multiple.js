// https://leetcode.com/problems/smallest-even-multiple/description/
// 2413. Smallest Even Multiple

/**
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function(n) {
    return n & 1 == 1 ? n * 2 : n
};

console.log(smallestEvenMultiple(5))
// Output: 10
console.log(smallestEvenMultiple(6))
// Output: 6

// https://leetcode.com/problems/count-primes/description/
// 204. Count Primes
// Explanation: https://algo.monster/liteproblems/204
// the Sieve of Eratosthenes algorithm

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  let primes = new Array(n).fill(true),
      out = 0;
  for (let i = 2; i < n; ++i) {
    if (primes[i]) {
      ++out;
      for (let j = i + i; j < n; j += i) primes[j] = false;
    }
  }
  return out;
};

console.log(countPrimes(10))
// Output: 4
console.log(countPrimes(0))
// Output: 0
console.log(countPrimes(1))
// Output: 0

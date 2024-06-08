// https://leetcode.com/problems/calculate-digit-sum-of-a-string/description/
// 2243. Calculate Digit Sum of a String

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
  while (s.length > k) {
    let new_s = ''; // each round accumalate new string new_s
    for (let i = 0; i < s.length; i += k) {
      let sub = s.slice(i, i + k),
          sum = 0;
      for (const c of sub) sum += c - '0'; // sum of each digits
      new_s += sum; // rebuild new string with sum
    }
    s = new_s; // update new string to s
  }
  return s;
};

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSumII = function(s, k) {
  while (s.length > k) {
    let newString = "";
    for (let i = 0; i < s.length; i += k)
      newString += s.substring(i, i + k).split("").reduce((acc, val) => acc + (+val), 0);
    s = newString;
  }
  return s;
};

console.log(digitSum("11111222229", 3));
// Output: "132"
console.log(digitSum("11111222223", 3));
// Output: "135"
console.log(digitSum("00000000", 3));
// Output: "000"

console.log(digitSumII("11111222229", 3));
// Output: "132"
console.log(digitSumII("11111222223", 3));
// Output: "135"
console.log(digitSumII("00000000", 3));
// Output: "000"

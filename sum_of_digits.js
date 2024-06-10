// https://leetcode.com/problems/sum-of-digits-of-string-after-convert/
// 1945. Sum of Digits of String After Convert

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  let offset = "a".charCodeAt(0) - 1,
      tmp = s.split('').reduce((acc, char) => acc + (char.charCodeAt(0) - offset), '')
  while (k > 0) {
    tmp = tmp.toString().split('').reduce((sum, num) => sum + Number(num), 0)
    k--;
  }
  return tmp;
};

console.log(getLucky("iiii", 1));
// Output: 36
console.log(getLucky("leetcode", 2));
// Output: 6
console.log(getLucky("zbax", 2));
// Output: 8

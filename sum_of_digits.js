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


// #######################
// https://leetcode.com/problems/happy-number/description/
// 202. Happy Number
// Explanation of the expected solution based on the "Two Pointers" technique:
// https://algo.monster/liteproblems/202

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  if (n<1) {
    return false;
  }

  var iter = function(num) {
    let out = 0;
    while (num > 0) {
      const remainder = num % 10;
      num = Math.floor(num / 10);
      out += remainder * remainder;
    }
    return out
  }

  while (n != 1 && n != 4) {
    n = iter(n);
  };
  return n == 1;
};

console.log("Happy Number")
console.log(isHappy(0));
// Output: false
console.log(isHappy(2))
// Output: false
console.log(isHappy(2**31 - 1)) // 2147483647
// Output: false
console.log(isHappy(4722354576))
// Output: false
console.log(isHappy(9999975))
// Output: false

console.log(isHappy(7))
// Output: true
console.log(isHappy(19))
// Output: true
console.log(isHappy(99924))
// Output: true
console.log(isHappy(85226))
// Output: true
console.log(isHappy(72781))
// Output: true
console.log(isHappy(57052))
// Output: true
console.log(isHappy(7414))
// Output: true
console.log(isHappy(9999976))
// Output: true


var countHappyNumbers = function() {
  console.log("Quantity of Happy Numbers")
  let out = 0;
  for (let i = 1; i <= 10_000_000; ++i) {
    if (isHappy(i)) ++out
  }
  return out
}

// console.log(countHappyNumbers())

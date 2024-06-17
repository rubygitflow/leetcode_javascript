// https://leetcode.com/problems/sqrtx/description/
// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let l = 0, r = x;
  while(l < r) {
    // let middle = (l + r + 1) >> 1, // 2**31 >> 1 = -1073741824
    let middle = (l + r + 1) >>> 1,
        square = middle * middle;
    if (square == x) return middle;
    
    if (square < x) {
      l = middle;
    } else {
      r = middle - 1;
    }
  }
  return l;
};


console.log(mySqrt(4));
// Output: 2
console.log(mySqrt(8));
// Output: 2
console.log(mySqrt(1));
// Output: 1
console.log(mySqrt(0));
// Output: 0
console.log(mySqrt(2**31 - 1));
// Output: 46340
console.log(mySqrt(2147395601));
// Output: 46340

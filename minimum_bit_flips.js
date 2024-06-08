// https://leetcode.com/problems/minimum-bit-flips-to-convert-number/description/
// 2220. Minimum Bit Flips to Convert Number

/**
 * @param {number} start
 * @param {number} goal
 * @return {number}
 */
var minBitFlips = function(start, goal) {
  let tmp = start ^ goal;
  let out = 0;
  while(tmp > 0){
    if((tmp & 1) === 1) out++;
    tmp >>= 1;
  }
  return out;
};

console.log(minBitFlips(10, 7));
// Output: 3
console.log(minBitFlips(3, 4));
// Output: 3
console.log(minBitFlips(10**9, 1));
// Output: 14

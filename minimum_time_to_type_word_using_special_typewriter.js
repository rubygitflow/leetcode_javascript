// https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/description/
// 1974. Minimum Time to Type Word Using Special Typewriter

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function(word) {
  let seconds = word.length;
  let start_ch = "a".charCodeAt(0);
  for (let i = 0; i < word.length; i++) {
      let char = word.charCodeAt(i);
      let distance = Math.abs(start_ch - char);
      seconds += Math.min(distance, (26 - distance));
      start_ch = char;
  }
  return seconds;
};

console.log(minTimeToType("abc"))
// Output: 5
console.log(minTimeToType("bza"))
// Output: 7
console.log(minTimeToType("zjpc"))
// Output: 34

// https://leetcode.com/problems/delete-characters-to-make-fancy-string/description/
// 1957. Delete Characters to Make Fancy String

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
  return [...s].reduce(([acc, prev_ch, prev2_ch], ch, idx) => {
    return [
      ch == prev_ch && ch == prev2_ch ? acc : acc + ch,
      ch,
      prev_ch
    ];
  }, ['','',''])[0];
};

console.log("Delete Characters to Make Fancy String (reduce)")
console.log(makeFancyString("leeetcode"))
// Output: "leetcode"
console.log(makeFancyString("aaabaaaa"))
// Output: "aabaa"
console.log(makeFancyString("aab"))
// Output: "aab"


/**
 * @param {string} s
 * @return {string}
 */
var makeFancyStringII = function(s) {
    let chars = [...s],
        acc = '';
    for(let i = 0; i < chars.length; i++){
        if(s[i] !== s[i - 1] || s[i] !== s[i - 2]) acc += s[i];
    }
    return acc;
};

console.log("Delete Characters to Make Fancy String (FOR-loop)")
console.log(makeFancyStringII("leeetcode"))
// Output: "leetcode"
console.log(makeFancyStringII("aaabaaaa"))
// Output: "aabaa"
console.log(makeFancyStringII("aab"))
// Output: "aab"

module.exports = { makeFancyString, makeFancyStringII };

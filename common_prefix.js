// https://leetcode.com/problems/longest-common-prefix/description/
// 14. Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 2) return ""

  for (let i=0; i<strs[0].length; i++) {
    for (let j=1; j<strs.length; j++) {
      if (strs[j].length<=i || strs[j][i] != strs[0][i]) return strs[0].slice(0,i);
    }
  }
  return strs[0];
};

console.log("Longest Common Prefix")
console.log(longestCommonPrefix(["flower","flow","flight"]))
// # Output: "fl"
console.log(longestCommonPrefix(["dog","racecar","car"]))
// Output: ""
console.log(longestCommonPrefix(["flow","flow","flow"]))
// Output: "flow"
console.log(longestCommonPrefix(["dog"]))
// Output: ""

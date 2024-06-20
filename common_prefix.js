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


// ########################
// https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/description/
// 3043. Find the Length of the Longest Common Prefix

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */
var longestCommonPrefixAtLeastOne = function(arr1, arr2) {
  if (arr1.length < 1 || arr2.length < 1) return 0;

  let acc = new Set();
  for (let x of arr1){
    while (x > 0){
      acc.add(x);
      x = Math.trunc(x / 10);
    }
  }
  let out = 0
  for(let x of arr2){
    while (x > 0 || x > 10 ** out){
      if (acc.has(x)){
        let str = String(x);
        out = Math.max(out, str.length);
      };
      x = Math.trunc(x / 10);
    }
  }
  return out;
};

console.log("Find the Length of the Longest Common Prefix")
console.log(longestCommonPrefixAtLeastOne([1,10,100], [1000, 1]))
// # Output: 3
console.log(longestCommonPrefixAtLeastOne([1,2,3], [4,4,4]))
// # Output: 0
console.log(longestCommonPrefixAtLeastOne([1,2,3], []))
// # Output: 0

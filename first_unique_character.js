// https://leetcode.com/problems/first-unique-character-in-a-string/description/
// 387. First Unique Character in a String

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let cnt = new Map();
    // Count character frequencies
    for (let c of s) {
        cnt.set(c, (cnt.get(c) || 0) + 1);
    };
    // Find the first unique character
    for (let i = 0; i < s.length; ++i) {
        if (cnt.get(s[i]) === 1) return i;
    }
    // If no unique character is found
    return -1;
};

console.log(firstUniqChar("leetcode"));
// Output: 0
console.log(firstUniqChar("loveleetcode"));
// Output: 2
console.log(firstUniqChar("aabb"));
// Output: -1

// https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/description/
// 3083. Existence of a Substring in a String and Its Reverse

/**
 * @param {string} s
 * @return {boolean}
 */
var isSubstringPresent = function(s) {
    let rev = s.split('').reverse().join('');
    for (let i = 0; i + 1 < s.length; ++i) {
        if (rev.indexOf(s.slice(i, i+2)) > -1) return true
    }
    return false
};

console.log(isSubstringPresent("leetcode"));
// Output: true
console.log(isSubstringPresent("abcba"));
// Output: true
console.log(isSubstringPresent("abcd"));
// Output: false

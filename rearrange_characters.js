// https://leetcode.com/problems/rearrange-characters-to-make-target-string/description/
// 2287. Rearrange Characters to Make Target String

/**
 * @param {string} s
 * @param {string} target
 * @return {number}
 */
var rearrangeCharacters = function(s, target) {
    let min = Infinity;
    let sc = new Map();
    for (let c of s) {
        sc.set(c, (sc.get(c) || 0) + 1);
    };
    let tc = new Map();
    for (let c of target) {
        tc.set(c, (tc.get(c) || 0) + 1);
    };
    for (let [key, val] of tc) {
        if (sc.has(key)) {
            min = Math.min(min, Math.floor((sc.get(key) || 0) / val))
        } else {
            min = 0
            break;
        }
    };
    return min;
};


console.log(rearrangeCharacters("ilovecodingonleetcode","code"));
// Output: 2
console.log(rearrangeCharacters("abcba","abc"));
// Output: 1
console.log(rearrangeCharacters("abbaccaddaeea","aaaaa"));
// Output: 1
console.log(rearrangeCharacters("abbaccaddaeea","фd"));
// Output: 0

// https://leetcode.com/problems/maximum-number-of-balloons/
// 1189. Maximum Number of Balloons

/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    const map = { b: 0, a: 0, l: 0, o: 0, n: 0, };
    for (const l of text) {
        map[l]++; 
    }
    return Math.floor(
        Math.min(map.b, map.a, map.l / 2, map.o / 2, map.n)
    );
};
console.log(maxNumberOfBalloons("nlaebolko"));
// Output: 1
console.log(maxNumberOfBalloons("loonbalxballpoon"));
// Output: 2
console.log(maxNumberOfBalloons("leetcode"));
// Output: 0

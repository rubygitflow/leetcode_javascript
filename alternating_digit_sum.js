// https://leetcode.com/problems/alternating-digit-sum/description/
// 2544. Alternating Digit Sum

/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    return [...String(n)].reduce((sum, num, idx) => {
        return sum + (-1) ** idx * Number(num);
    }, 0);
};

console.log("Alternating Digit Sum")
console.log(alternateDigitSum(521));
// Output: 4
console.log(alternateDigitSum(111));
// Output: 1
console.log(alternateDigitSum(886996));
// Output: 0
console.log(alternateDigitSum(885996));
// Output: -1
console.log(alternateDigitSum(886995));
// Output: 1

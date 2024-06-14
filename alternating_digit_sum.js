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


// ############################
// https://leetcode.com/problems/add-digits/description/
// 258. Add Digits
// Explanation: https://algo.monster/liteproblems/258

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    if (isNaN(num) || num === 0) return 0;

    return (num - 1) % 9 + 1;
};

console.log("Add Digits (digital root - Time complexity: O(1))")
console.log(addDigits(38));
// Output: 2
console.log(addDigits(0));
// Output: 0
console.log(addDigits(886995));
// Output: 9
console.log(addDigits(1));
// Output: 1

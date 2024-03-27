// https://leetcode.com/problems/concatenation-of-array/description/
// 1929. Concatenation of Array

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    return [...nums,...nums]
};

console.log(getConcatenation([1,2,1]));
// Output: [1,2,1,1,2,1]
console.log(getConcatenation([1,3,2,1]));
// Output: [1,3,2,1,1,3,2,1]

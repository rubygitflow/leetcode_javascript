// https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/description/
// 1375. Number of Times Binary String Is Prefix-Aligned

/**
 * @param {number[]} flips
 * @return {number}
 */
var numTimesAllBlue = function(flips) {
    let output = right = 0;
    for(let left=0; left<flips.length; left++){
        // we store only the right value of the passed range
        right = Math.max(right, flips[left]);
        // True counter for the left-th step
        if (right === left+1) output += 1;
    }
    return output;
};
        
console.log(numTimesAllBlue([3,2,4,1,5]));
// Output: 2
console.log(numTimesAllBlue([4,1,2,3]));
// Output: 1

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
        if (right !== left+1) continue;
        // True counter for the left-th step
        output += 1;
    }
    return output;
    // let count = 0, res = 0, end = 0;
    // for (let f of flips) {
    //     end = Math.max(end, f);
    //     count += 1;
    //     if (end !== count) continue;
    //     res += 1;
    // }
    // return res;
};
        
console.log(numTimesAllBlue([3,2,4,1,5]));
// Output: 2
console.log(numTimesAllBlue([4,1,2,3]));
// Output: 1

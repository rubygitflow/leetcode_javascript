// https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/description/
// 2380. Time Needed to Rearrange a Binary String

/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
    let output = zeroes = 0;
    for(let i=0; i< s.length; i++){
        if(s.charAt(i) == '1'){
            if (zeroes > 0) output = Math.max(output+1, zeroes)
        } else zeroes++;
    }
    return output;
};

console.log(secondsToRemoveOccurrences("000111"));
// Output: 5
console.log(secondsToRemoveOccurrences("0110001"));
// Output: 4
console.log(secondsToRemoveOccurrences("0110101"));
// Output: 4
console.log(secondsToRemoveOccurrences("11100"));
// Output: 0

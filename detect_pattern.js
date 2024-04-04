// https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/description/
// 1566. Detect Pattern of Length M Repeated K or More Times

/**
 * @param {number[]} arr
 * @param {number} m
 * @param {number} k
 * @return {boolean}
 */
var containsPattern = function(arr, m, k) {
    for (let i = 0; i < arr.length - m * k + 1; i++) {
        let sliced = arr.slice(i, i + m).join('').repeat(k)
        let targetStr = arr.slice(i, i + m * k).join('')
        if (sliced == targetStr) return true
    }
    return false
};

console.log(containsPattern([1,2,4,4,4,4], 1, 3));
// Output: true
console.log(containsPattern([1,2,1,2,1,1,1,3], 2, 2));
// Output: true
console.log(containsPattern([1,2,1,2,1,3], 2, 3));
// Output: false
console.log(containsPattern([1,2,1,2], 2, 3));
// Output: false

// https://leetcode.com/problems/is-object-empty/description/
// 2727. Is Object Empty

/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    for (const x in obj) {
        return false;
    }
    // return true;
    return typeof(obj) != 'number';
};

console.log(isEmpty({"x": 5, "y": 42}))
// Output: false
console.log(isEmpty({}))
// Output: true
console.log(isEmpty([null, false, 0]))
// Output: false
console.log(isEmpty([]))
// Output: true
console.log(isEmpty('wer'))
// Output: false
console.log(isEmpty(''))
// Output: true
console.log(isEmpty(4.9))
// Output: /true?/ false
console.log(isEmpty(null))
// Output: true
console.log(isEmpty([null]))
// Output: false

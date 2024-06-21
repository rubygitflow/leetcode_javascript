// https://leetcode.com/problems/palindrome-number/description/
// 9. Palindrome Number

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0 || (x > 0 && x % 10 === 0)) return false;

    let y = 0;
    while (y < x) {
        y = y * 10 + (x % 10);
        x = ~~(x / 10);
    }
    return x == y || x == ~~(y / 10);
};


console.log(isPalindrome(-121))
// Output: false
console.log(isPalindrome(121))
// Output: true
console.log(isPalindrome(123435))
// Output: false
console.log(isPalindrome(73537))
// Output: true
console.log(isPalindrome(900))
// Output: false
console.log(isPalindrome(-123435))
// Output: false
console.log(isPalindrome(994499))
// Output: true


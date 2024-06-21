// https://leetcode.com/problems/valid-parentheses/description/
// 20. Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const stack = [];
  const pairs = {
                  '(': ')',
                  '{': '}',
                  '[': ']'
                };

  for (const bracket of s) {
    if (pairs.hasOwnProperty(bracket)) {
      stack.push(bracket);
    } else if (stack.length === 0 || pairs[stack.pop()] != bracket) {
      return false;
    }
  }
  return stack.length === 0;    
};


console.log(isValid("()[]{}"))
// Output: true
console.log(isValid("(]"))
// Output: false

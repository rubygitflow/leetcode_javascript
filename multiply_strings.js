// https://leetcode.com/problems/multiply-strings/description/
// 43. Multiply Strings
// Simulating Mathematical Multiplication: digit by digit

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'

  const m = num1.length, n = num2.length, out = new Array(m+n).fill(0)
  for (let i=m-1; i>=0; i--) {
    for (let j=n-1; j>=0; j--) {
      let sum = out[i+j+1] + Number(num1[i]) * Number(num2[j])
      out[i+j+1] = sum%10
      out[i+j] += Math.floor(sum/10)
    }
  }
  if (out[0] === 0) out.shift()
  return out.join('')
}

console.log(multiply("2", "3"))
// Output: "6"
console.log(multiply("123", "456"))
// Output: "56088"
console.log(multiply("999", "9"))
// Output: "8991"

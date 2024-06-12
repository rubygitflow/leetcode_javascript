// https://leetcode.com/problems/count-numbers-with-unique-digits/description/
// 357. Count Numbers with Unique Digits
// Explanation: https://algo.monster/liteproblems/357

/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
  if (n == 0) return 1
  let out = 10,
      cur = 9;
  for (let i = 0; i < (n-1); ++i) {
    cur *= 9 - i
    out += cur
  }
  return out
};

console.log("Count Numbers with Unique Digits")
console.log(countNumbersWithUniqueDigits(0));
// Output: 1
console.log(countNumbersWithUniqueDigits(1));
// Output: 10
console.log(countNumbersWithUniqueDigits(2));
// Output: 91
console.log(countNumbersWithUniqueDigits(3));
// Output: 739
console.log(countNumbersWithUniqueDigits(4));
// Output: 5275
console.log(countNumbersWithUniqueDigits(5));
// Output: 32491
console.log(countNumbersWithUniqueDigits(6));
// Output: 168571
console.log(countNumbersWithUniqueDigits(7));
// Output: 712891
console.log(countNumbersWithUniqueDigits(8));
// Output: 2345851

// ###########################
// https://leetcode.com/problems/count-special-integers/description/
// 2376. Count Special Integers
// Explanation: https://algo.monster/liteproblems/2376

/**
 * @param {number} n
 * @return {number}
 */
var countSpecialNumbers = function(n) {
    // Permutation function permutations(m, n)
    // that calculates permutations of m elements taken n at a time.
    // Recursive function to calculate permutations: permutations(m, n) = m! / (m-n)!
    function permutations(m, n){
        let nonRepeatingNums = 1
        for(let i = 0; i < n; i++) {
            nonRepeatingNums*=m
            m--
        }
        return nonRepeatingNums
    }

    const digits = []
    let answer = 0
    let temp = n+1

    while(temp !== 0) {
        digits.unshift(temp%10)
        temp = Math.floor(temp/10)
    }

    for(let i = 0; i < digits.length - 1; i++) {
        answer += 9 * permutations(9,i)
    }

    const visited = new Set()

    for(let i = 0; i < digits.length; i++) {
        const current_digit = digits[i];
        for(let j = i===0?1:0; j < current_digit; j++) {
            if(visited.has(j)) continue
            answer += permutations(10-(i+1), digits.length - 1 - i)
        }
        if(visited.has(current_digit)) break
        visited.add(current_digit)
    }

    return answer
};

console.log("Count Special Integers")
console.log(countSpecialNumbers(5));
// Output: 5
console.log(countSpecialNumbers(20));
// Output: 19
console.log(countSpecialNumbers(135));
// Output: 110
console.log(countSpecialNumbers(320));
// Output: 251
console.log(countSpecialNumbers(2 * 10 ** 9));
// Output: 5974650

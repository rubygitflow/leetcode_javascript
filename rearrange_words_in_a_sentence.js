// https://leetcode.com/problems/rearrange-words-in-a-sentence/description/
// 1451. Rearrange Words in a Sentence

/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
    const strArr = text.toLowerCase().split(' ').sort((a, b) => a.length - b.length)
    const output = strArr.join(' ')

    return output[0].toUpperCase()+output.slice(1)
};

console.log(arrangeWords("Leetcode is cool"));
// Output: "Is cool leetcode"
console.log(arrangeWords("Keep calm and code on"));
// Output: "On and keep calm code"
console.log(arrangeWords("To be or not to be"));
// Output: "To be or to be not"

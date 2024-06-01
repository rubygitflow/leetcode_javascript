// https://leetcode.com/problems/first-letter-to-appear-twice/description/
// 2351. First Letter to Appear Twice

/**
 * @param {string} s
 * @return {character}
 */
var repeatedCharacter = function(s) {
    const holder={};
    for(let char of s){
        holder[char] = holder[char]+1 || 1;
        if(holder[char]==2) return char
    };
    return ""
};

console.log(repeatedCharacter("abccbaabz"));
// Output: "c"
console.log(repeatedCharacter("abcdd"));
// Output: "d"
console.log(repeatedCharacter("abcdef"));
// Output: ""

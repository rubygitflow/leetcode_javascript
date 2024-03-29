// https://leetcode.com/problems/valid-anagram/description/
// 242. Valid Anagram

/**
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const counter = new Map();
    for (let char of s) {
        counter.set(char, (counter.get(char) || 0) + 1);
    }
    for (let char of t) {
        if (!counter.has(char) || counter.get(char) === 0) {
            return false;
        }
        counter.set(char, counter.get(char) - 1);
    }
    return true;    
};

/**
 * tps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var anagram = function(s, t) {
    if(s.length!==t.length) return false
    objS={}
    objT={}
    for(let i=0;i<s.length;i++){
        objS[s[i]]=(objS[s[i]]||0)+1
        objT[t[i]]=(objT[t[i]]||0)+1
    }
    for(let key in objS){
        if(objS[key]!==objT[key]) return false
    }
    return true
};

console.log(isAnagram('ana👩ram', 'na👩aram'));
// Output: true
console.log(isAnagram('anagram', 'nagaram'));
// Output: true
console.log(isAnagram('anagram', 'nagram'));
// Output: false
console.log(isAnagram('rat', 'car'));
// Output: false

console.log(anagram('ana👩ram', 'na👩aram'));
// Output: true
console.log(anagram('anagram', 'nagaram'));
// Output: true
console.log(anagram('anagram', 'nagram'));
// Output: false
console.log(anagram('rat', 'car'));
// Output: false

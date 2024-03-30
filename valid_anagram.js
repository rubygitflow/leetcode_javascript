// https://leetcode.com/problems/valid-anagram/description/
// 242. Valid Anagram

console.log('Valid Anagram')
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


console.log('Group Anagrams')
// ***************************
// https://leetcode.com/problems/group-anagrams/description/
// 49. Group Anagrams

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let myMap = new Map();
    strs.forEach((ele)=>{
        const eleSorted = ele.split('').sort().join('');
        if(myMap.has(eleSorted)){
            myMap.set(eleSorted , [ele, ...myMap.get(eleSorted)])
        } else myMap.set(eleSorted , [ele])
    })
    return (Array.from(myMap.values()))
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""]));
// Output: [[""]]
console.log(groupAnagrams(["a"]));
// Output: [["a"]]

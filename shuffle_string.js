// https://leetcode.com/problems/shuffle-string/description/
// 1528. Shuffle String

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
    let str=[]
    for(let i=0;i<indices.length;i++){
        str[indices[i]]=s[i]
    }
    return str.join("");
};

console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));
// Output: "leetcode"
console.log(restoreString("abc", [0,1,2]));
// Output: "abc"

// https://leetcode.com/problems/greatest-english-letter-in-upper-and-lower-case/description/
// 2309. Greatest English Letter in Upper and Lower Case

/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
    let col = new Map()
    let mem = new Set()
    let ans = ""
    for(const c of s){
        if (!mem.has(c)){
            mem.add(c)
            const upper = c.toUpperCase()
            // we have caught a changed character case if the character already exists
            col.set(upper, col.has(upper) ? 2 : 1);
            // processing an additional condition
            ans = col.get(upper) == 2 ? ( upper > ans ? upper : ans) : ans
        }
    };
    return  ans
};

console.log(greatestLetter("l Ee TcOd E "));
// Output: "E"
console.log(greatestLetter("a rR AzFif"));
// Output: "R"
console.log(greatestLetter("a rr AzFifA"));
// Output: "F"
console.log(greatestLetter("AbCdEfGhIjK"));
// Output: ""
console.log(greatestLetter("a рр AzФiфA"));
// Output: "Ф"

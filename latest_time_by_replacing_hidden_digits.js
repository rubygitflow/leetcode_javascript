// https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/description/
// 1736. Latest Time by Replacing Hidden Digits

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function(time) {
    time=time.split('')
    if(time[0]=='?') time[0]=time[1]<4?'2':'1'
    if(time[1]=='?') time[1]=time[0]>1?'3':'9'
    if(time[3]=='?') time[3]='5'
    if(time[4]=='?') time[4]='9'
    return time.join('')
};

console.log(maximumTime('2?:?0'));
// Output: "23:50"
console.log(maximumTime('0?:3?'));
// Output: "09:39"
console.log(maximumTime('1?:22'));
// Output: "19:22"


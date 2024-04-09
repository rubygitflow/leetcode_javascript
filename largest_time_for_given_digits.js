// https://leetcode.com/problems/largest-time-for-given-digits/description/
// 949. Largest Time for Given Digits

/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigits = function(arr) {
    function minute_first_digit(arr, res) {
        return res+arr[0].toString()
    };
    function minute_second_digit(arr, res) {
        let out = '';
        for(let i=5; i>-1; i--){
            let pos = arr.indexOf(i);
            if(pos > -1){
                arr.splice(pos, 1);
                out = minute_first_digit(arr,res+i.toString());
                break
            }
        }
        return out
    };
    function hour_first_digit(arr, res) {
        let out = '';
        for(let i=(res === '2' ? 3 : 9); i>-1; i--){
            let pos = arr.indexOf(i);
            if(pos > -1){
                arr.splice(pos, 1);
                out = minute_second_digit(arr,res+i.toString()+':');
                break
            }
        }
        return out
    };
    let out = '';
    for(let i=2; i>-1; i--){
        let pos = arr.indexOf(i);
        if(pos > -1){
            arr.splice(pos, 1);
            out = hour_first_digit(arr,i.toString());
            break
        }
    }
    return out
};

/**
 * @param {number[]} arr
 * @return {string}
 */
var largestTimeFromDigitsBF = function(arr) {
    let comp = arr.sort().join('');
    for(let i = 23; i >= 0; i--){
        for(let j = 59; j >= 0; j--){
            if(comp === [Math.floor(i / 10), i % 10, Math.floor(j / 10), j % 10].sort().join(''))
            return '' + Math.floor(i / 10) + i % 10 + ':' + Math.floor(j / 10) + j % 10;
        }
    } 
    return '';
};

console.log('Largest Time for Given Digits');
console.log(largestTimeFromDigits([1,5,3,4]));
// Output: "15:43"
console.log(largestTimeFromDigits([1,2,3,4]));
// Output: "23:41"
console.log(largestTimeFromDigits([5,5,5,5]));
// Output: ""
console.log(largestTimeFromDigits([0,9,9,9]));
// Output: ""

console.log('Largest Time for Given Digits (Brute Force)');
console.log(largestTimeFromDigitsBF([1,5,3,4]));
// Output: "15:43"
console.log(largestTimeFromDigitsBF([1,2,3,4]));
// Output: "23:41"
console.log(largestTimeFromDigitsBF([5,5,5,5]));
// Output: ""
console.log(largestTimeFromDigitsBF([0,9,9,9]));
// Output: ""


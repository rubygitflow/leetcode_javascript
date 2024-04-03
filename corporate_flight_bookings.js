// https://leetcode.com/problems/corporate-flight-bookings/description/
// 1109. Corporate Flight Bookings

/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const output = new Array(n).fill(0);
    for (const [first, last, seats] of bookings) {
        for (let i = first; i < last+1; ++i){
            output[i - 1] += seats;
        }
    }
    return output;
};

console.log(corpFlightBookings([[1,2,10],[2,3,20],[2,5,25]], 5));
// Output: [10,55,45,25,25]
console.log(corpFlightBookings([[1,2,10],[2,2,15]], 2));
// Output: [10,25]


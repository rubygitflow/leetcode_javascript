// https://leetcode.com/problems/time-needed-to-buy-tickets/
// 2073. Time Needed to Buy Tickets

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
    let output = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            output += Math.min(tickets[i],tickets[k])
        }else{
            output += Math.min(tickets[i],tickets[k]-1)
        }
    };
    return output    
};

console.log(timeRequiredToBuy([2,3,2], 2));
// Output: 6
console.log(timeRequiredToBuy([5,1,1,1], 0));
// Output: 8
console.log(timeRequiredToBuy([5, 2, 3, 4], 2));
// Output: 10


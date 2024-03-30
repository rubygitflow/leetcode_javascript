// https://leetcode.com/problems/average-waiting-time/description/
// 1701. Average Waiting Time

/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function(customers) {
    let output = 0,
        at_free_time = 0,
        l = customers.length;
    if (l < 1) return 0.0

    for (let i = 0; i < l; i++) {
        at_free_time = Math.max(at_free_time, customers[i][0]) + customers[i][1]
        output += at_free_time - customers[i][0]
    }
    return output / l
};

console.log(averageWaitingTime([[1,2],[2,5],[4,3]]));
// Output: 5.0
console.log(averageWaitingTime([[5,2],[5,4],[10,3],[20,1]]));
// Output: 3.25

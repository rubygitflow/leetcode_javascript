// https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/description/
// 1723. Find Minimum Time to Finish All Jobs

/**
 * @param {number[]} jobs
 * @param {number} k
 * @return {number}
 */
var minimumTimeRequired = function(jobs, k) {
    let x = jobs, 
        baskets = new Uint32Array(k),
        basket_num = 0,
        avg = Math.ceil(x.reduce((a, b) => a + b, 0) / k)
    x.sort((a,b)=>b-a);
    while (x.length > 0) {
        let i = 0;
        baskets[basket_num] = parseInt(x.splice(i, 1));
        avg = Math.max(avg, baskets[basket_num]);
        while (i < x.length) {
            if (baskets[basket_num] + parseInt(x[i]) <= avg) {
                baskets[basket_num] += parseInt(x.splice(i, 1))
            } else {
                i += 1
            }
        };
        if (basket_num < (k - 1)) {
            basket_num += 1
        } else {
            baskets[basket_num] += x.reduce((a, b) => a + b, 0);
            x = []
        }
    };
    return Math.max(...baskets)
};

console.log(minimumTimeRequired([3,2,3], 3));
// Output: 3
console.log(minimumTimeRequired([1,2,4,7,8], 2));
// Output: 11
console.log(minimumTimeRequired([4,7,8], 2));
// Output: 11
console.log(minimumTimeRequired([24,17,28], 2));
// Output: 41

// https://leetcode.com/problems/minimum-time-visiting-all-points/description/
// 1266. Minimum Time Visiting All Points

/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let l = points.length;
    if (l < 2) return 0;
    let a = points[0][0];
    let b = points[0][1];
    let res = 0;
    for(let i=1; i<points.length; i++) {
        let maxa = Math.abs(a - points[i][0]);
        let maxb = Math.abs(b - points[i][1]);
        res = res + Math.max(maxa, maxb);
        a = points[i][0];
        b = points[i][1];
    }
    return res;
};

console.log(minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]));
// Output: 7
console.log(minTimeToVisitAllPoints([[3,2],[-2,2]]));
// Output: 5
console.log(minTimeToVisitAllPoints([[3,2]]));
// Output: 0

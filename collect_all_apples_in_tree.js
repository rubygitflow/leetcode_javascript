// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description/
// 1443. Minimum Time to Collect All Apples in a Tree

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let g = {};
    for (let i = 0; i < n; i++) g[i] = [];
    for (let [u, v] of edges) {
        g[u].push(v);
        g[v].push(u);
    };
    const vis = new Array(n).fill(false);

    const dfs = (u, cost) => {
        // skip visited paths
        if (vis[u]) return 0;

        vis[u] = true;
        let nxt_cost = 0;
        // collect all paths
        for (let v of g[u]) {
            nxt_cost += dfs(v, 2)
        }
        if (!hasApple[u] && nxt_cost == 0) return 0;

        // add "last mile" cost
        return cost + nxt_cost
    }

    return dfs(0, 0);
}

console.log(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false]));
// Output: 8 
console.log(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,false,true,false]));
// Output: 6
console.log(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,false,false,false,false,false]));
// Output: 0
console.log(minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[true,false,false,false,false,false,false]));
// Output: 0
console.log(minTime(9,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6],[4,7],[4,8]],[false,false,false,false,false,false,false,false,true]));
// Output: 6
console.log(minTime(9,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6],[4,7],[4,8]],[false,true,false,false,true,false,false,false,true]));
// Output: 6


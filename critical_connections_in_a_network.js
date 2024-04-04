// https://leetcode.com/problems/critical-connections-in-a-network/description/
// 1192. Critical Connections in a Network

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
var criticalConnections = function(n, connections) {
    let graph = [];
    // generate graph using adjacency list
    for ([from, to] of connections) {
        if (!graph[from]) graph[from] = [];
        if (!graph[to]) graph[to] = [];
        graph[from].push(to);
        graph[to].push(from)
    }

    let times = 0;
    let discovered = new Array(n).fill(0); // times for each node
    let lowest = new Array(n).fill(0); // low - value
    let visited = new Array(n).fill(false);
    let bridges = [];

    var dfs = function(cur,prev) {
        visited[cur] = true;
        times++;
        lowest[cur] = discovered[cur] = times;

        for (let node of graph[cur]) {
            if (node == prev) continue; // sanity check - in an undirected graph, an outward edge may come back right after
            if (!visited[node]) {
                dfs(node, cur);
                // during the backtracking, propagate min low-value
                lowest[cur] = Math.min(lowest[cur], lowest[node]);
                if (discovered[cur] < lowest[node]) { // bridge found
                    bridges.push([cur, node]);
                }
            } else {
                // when the 'node' node is already visited, it might have a lower times than our low-value
                lowest[cur] = Math.min(lowest[cur], discovered[node]);
            }
        }
    }

    for (let i=0;i<n;i++) {
        if (!visited[i]) {
            dfs(i, -1);
        }
    }
    return bridges;
};

console.log(criticalConnections(4, [[0,1],[1,2],[2,0],[1,3]]));
// Output: [[1,3]]
console.log(criticalConnections(2, [[0,1]]));
// Output: [[0,1]]
// infinity sign
console.log(criticalConnections(5, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,1]]));
// Output: []
// dumbbell
console.log(criticalConnections(6, [[0,1],[1,2],[2,0],[1,3],[3,4],[4,5],[5,3]]));
// Output: [[1,3]]
// 2 donuts
console.log(criticalConnections(7, [[0,1],[1,2],[2,0],      [3,4],[4,5],[5,3],[5,6]]));
// Output: [[5,6]]
// star
console.log(criticalConnections(7, [[0,1],[0,2],[2,3],[0,4],[0,5],[5,6]]));
// Output: [[0, 1], [2, 3], [0, 2], [0, 4], [5, 6], [0, 5]]

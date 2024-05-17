// https://leetcode.com/problems/find-edges-in-shortest-paths/description/
// 3123. Find Edges in Shortest Paths

// https://github.com/datastructures-js/priority-queue?tab=readme-ov-file#install
// npm install --save @datastructures-js/priority-queue

const {
  PriorityQueue,
} = require('@datastructures-js/priority-queue');

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean[]}
 */
var findAnswer = function(n, edges) {
    const graph = Array(n).fill(null).map(() => []);
    for (const [u, v, w] of edges) {
        graph[u].push([v, w]);
        graph[v].push([u, w]);
    }

    let dijkstra = (source) => {
        const dist = Array(n).fill(Infinity);
        dist[source] = 0;
        const pq = new PriorityQueue((x, y) => {x[0] - y[0] });
        pq.enqueue([0, source]);
        while (pq.size()) {
            const [x, u] = pq.dequeue();
            if (dist[u] == x) {
                for (const [v, w] of graph[u]) {
                    if (x+w < dist[v]) {
                        dist[v] = x+w;
                        pq.enqueue([x+w, v]);
                    }
                }
            }
        }
        return dist;
    };

    const dist0 = dijkstra(0),
          dist1 = dijkstra(n-1),
          m = edges.length;
    if (dist0[n-1] == Infinity) return Array(m).fill(false);

    const ans = [];
    for (const [u, v, w] of edges)
        ans.push(dist0[u]+w+dist1[v] == dist0[n-1] || dist1[u]+w+dist0[v] == dist0[n-1]);
    return ans;
};

console.log(findAnswer(6,[[0,1,4],[0,2,1],[1,3,2],[1,4,3],[1,5,1],[2,3,1],[3,5,3],[4,5,2]]));
// Output: [true,true,true,false,true,true,true,false]
console.log(findAnswer(4,[[2,0,1],[0,1,1],[0,3,4],[3,2,2]]));
// Output: [true,false,false,true]

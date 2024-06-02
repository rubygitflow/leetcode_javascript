// https://leetcode.com/problems/maximum-total-importance-of-roads/description/
// 2285. Maximum Total Importance of Roads

/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var maximumImportance = function(n, roads) {
    // Lets calculate the indegrees of each node
    // Use Array.fill() to create an array of length n filled with 0's
    return roads
        // For each road[a, b] increment the indegree of nodes a and b
        .reduce((indegree, [a, b]) => (indegree[a]++, indegree[b]++, indegree), Array(n).fill(0))
        // Sort the indegrees in descending order
        .sort((b, a) => b - a)
        // Finally calculate the max importance by summing the product of indegree & its index
        .reduce((importance, indegree, idx) => importance + indegree * (idx + 1), 0);
};

console.log(maximumImportance(5,[[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]));
// Output: 43
console.log(maximumImportance(5,[[0,3],[2,4],[1,3]]));
// Output: 20

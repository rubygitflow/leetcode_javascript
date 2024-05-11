// https://leetcode.com/problems/minimum-cost-to-convert-string-i/description/
// 2976. Minimum Cost to Convert String I

/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
  let m = original.length,
      minCost = Array(26).fill(0).map(() => Array(26).fill(Infinity)),
      charCodeAtA = 'a'.charCodeAt();
  for (let i = 0; i < m; i++) {
    let originalCharcode = original[i].charCodeAt() - charCodeAtA;
    let changedCharcode = changed[i].charCodeAt() - charCodeAtA;
    minCost[originalCharcode][changedCharcode] = Math.min(minCost[originalCharcode][changedCharcode], cost[i]);
  }
  for (let i = 0; i < 26; i++) minCost[i][i] = 0;
  // floyd warshall to find minimum cost between each pair of nodes
  for (let k = 0; k < 26; k++) { // use all paths with node k
    for (let i = 0; i < 26; i++) {
      for (let j = 0; j < 26; j++) {
        minCost[i][j] = Math.min(minCost[i][j], minCost[i][k] + minCost[k][j]);
      }
    }
  }
  
  let totalCost = 0;
  for (let i = 0; i < source.length; i++) {
    let sourceCharcode = source.charCodeAt(i) - charCodeAtA;
    let targetCharcode = target.charCodeAt(i) - charCodeAtA;
    if (minCost[sourceCharcode][targetCharcode] === Infinity) return -1;
    totalCost += minCost[sourceCharcode][targetCharcode];
  }
  return totalCost;
};


console.log(minimumCost("abcd","acbe",["a","b","c","c","e","d"],["b","c","b","e","b","e"],[2,5,5,1,2,20]));
// Output: 28
console.log(minimumCost("aaaa","bbbb",["a","c"],["c","b"],[1,2]));
// Output: 12
console.log(minimumCost("aaaa","bbbb",["a","c"],["d","b"],[1,2]));
// Output: -1
console.log(minimumCost("aaaa","bbbb",["a","c","a","d","e"],["c","b","d","e","b"],[3,2,1,1,1]));
// Output: 12
console.log(minimumCost("abcd","abce",["a"],["e"],[10000]));
// Output: -1
console.log(minimumCost("aaa","aaa",["a"],["e"],[10000]));
// Output: 0

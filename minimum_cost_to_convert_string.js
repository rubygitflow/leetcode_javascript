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

console.log("Array's solution")
console.log(minimumCost("abcd","acbe",["a","b","c","c","e","d"],["b","c","b","e","b","e"],[2,5,5,1,2,20]));
// Output: 28 (5 < 1+2)
console.log(minimumCost("abcd","acbe",["a","b","c","c","f","e","d"],["b","c","b","f","e","b","e"],[2,5,5,1,2,1,20]));
// Output: 29 (5 < 1+2+1)
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


/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCostEx = function(source, target, original, changed, cost) {
  const l = source.length;
  let actioned_inp = [],
      actioned_out = [];

  for (let i = 0; i < l; i++) {
    if (source[i] !== target[i]) {
      actioned_inp.push(source[i])
      actioned_out.push(target[i])
    }
  }
  const actioned_inp_set = new Set(actioned_inp),
        actioned_out_set = new Set(actioned_out),
        original_set = new Set(original),
        changed_set = new Set(changed);
  for (const element of original_set) actioned_inp_set.delete(element);
  if (actioned_inp_set.size > 0) return -1;

  for (const element of changed_set) actioned_out_set.delete(element);
  if (actioned_out_set.size > 0) return -1;

  const m = original.length;
  let graph = {};
  for (let i = 0; i < m; i++) {
    graph[original[i]] = graph[original[i]]||{};
    graph[original[i]][changed[i]] = Math.max(graph[original[i]][changed[i]]||0, cost[i])
  }

  const union = new Set([...original_set, ...changed_set]);

  // floyd warshall to find minimum cost between each pair of nodes
  for (const k of union) { // use all paths with node k
    graph[k] = graph[k]||{};
    for (const i of original_set) {
      graph[i] = graph[i]||{};
      for (const j of changed_set) {
        graph[i][j] = Math.min(
          isNaN(graph[i][j]) ? Infinity : graph[i][j],
          (isNaN(graph[i][k]) ? Infinity : graph[i][k]) +
            (isNaN(graph[k][j]) ? Infinity : graph[k][j])
        );
      }
    }
  }

  let totalCost = 0;
  for (let i = 0; i < l; i++) {
    if (graph[source[i]][target[i]] === Infinity) return -1;
    totalCost += graph[source[i]][target[i]]||0;
  }
  return totalCost;
};

console.log("Object's solution")
console.log(minimumCostEx("abcd","acbe",["a","b","c","c","e","d"],["b","c","b","e","b","e"],[2,5,5,1,2,20]));
// Output: 28 (5 < 1+2)
console.log(minimumCostEx("abcd","acbe",["a","b","c","c","f","e","d"],["b","c","b","f","e","b","e"],[2,5,5,1,2,1,20]));
// Output: 29 (5 < 1+2+1)
console.log(minimumCostEx("aaaa","bbbb",["a","c"],["c","b"],[1,2]));
// Output: 12
console.log(minimumCostEx("aaaa","bbbb",["a","c"],["d","b"],[1,2]));
// Output: -1
console.log(minimumCostEx("aaaa","bbbb",["a","c","a","d","e"],["c","b","d","e","b"],[3,2,1,1,1]));
// Output: 12
console.log(minimumCostEx("abcd","abce",["a"],["e"],[10000]));
// Output: -1
console.log(minimumCostEx("aaa","aaa",["a"],["e"],[10000]));
// Output: 0


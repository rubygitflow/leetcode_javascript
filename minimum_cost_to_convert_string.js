// https://leetcode.com/problems/minimum-cost-to-convert-string-i/description/
// 2976. Minimum Cost to Convert String I

console.log("Minimum Cost to Convert String I")

/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCostArrI = function(source, target, original, changed, cost) {
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
console.log(minimumCostArrI("abcd","acbe",["a","b","c","c","e","d"],["b","c","b","e","b","e"],[2,5,5,1,2,20]));
// Output: 28 (5 > 1+2)
console.log(minimumCostArrI("abcd","acbe",["a","b","c","c","f","e","d"],["b","c","b","f","e","b","e"],[2,5,5,1,2,1,20]));
// Output: 29 (5 > 1+2+1)
console.log(minimumCostArrI("aaaa","bbbb",["a","c"],["c","b"],[1,2]));
// Output: 12
console.log(minimumCostArrI("aaaa","bbbb",["a","c"],["d","b"],[1,2]));
// Output: -1
console.log(minimumCostArrI("aaaa","bbbb",["a","c","a","d","e"],["c","b","d","e","b"],[3,2,1,1,1]));
// Output: 12
console.log(minimumCostArrI("abcd","abce",["a"],["e"],[10000]));
// Output: -1
console.log(minimumCostArrI("aaa","aaa",["a"],["e"],[10000]));
// Output: 0


/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCostObjI = function(source, target, original, changed, cost) {
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
  for (let i = 0; i < actioned_inp.length; i++) {
    if (graph[actioned_inp[i]][actioned_out[i]] === Infinity) return -1;
    totalCost += graph[actioned_inp[i]][actioned_out[i]]||0;
  }
  return totalCost;
};

console.log("Object's solution")
console.log(minimumCostObjI("abcd","acbe",["a","b","c","c","e","d"],["b","c","b","e","b","e"],[2,5,5,1,2,20]));
// Output: 28 (5 > 1+2)
console.log(minimumCostObjI("abcd","acbe",["a","b","c","c","f","e","d"],["b","c","b","f","e","b","e"],[2,5,5,1,2,1,20]));
// Output: 29 (5 > 1+2+1)
console.log(minimumCostObjI("aaaa","bbbb",["a","c"],["c","b"],[1,2]));
// Output: 12
console.log(minimumCostObjI("aaaa","bbbb",["a","c"],["d","b"],[1,2]));
// Output: -1
console.log(minimumCostObjI("aaaa","bbbb",["a","c","a","d","e"],["c","b","d","e","b"],[3,2,1,1,1]));
// Output: 12
console.log(minimumCostObjI("abcd","abce",["a"],["e"],[10000]));
// Output: -1
console.log(minimumCostObjI("aaa","aaa",["a"],["e"],[10000]));
// Output: 0


// ****************************
// https://leetcode.com/problems/minimum-cost-to-convert-string-ii/description/
// 2977. Minimum Cost to Convert String II

console.log("Minimum Cost to Convert String II")

/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
function minimumCostArrII(source, target, original, changed, cost) {
    // Step 1: Initialize necessary data structures and variables
    const uniqueSubstrings = Array.from(new Set(original.concat(changed)));
    const substringIdMap = createSubstringIdMap(uniqueSubstrings);
    const numberOfSubstrings = Object.keys(substringIdMap).length;
    const substringDistances = initializeDistanceMatrix(numberOfSubstrings);
    const dp = new Array(source.length + 1).fill(Infinity);

    // Step 2: Populate substring distances matrix
    for (let i = 0; i < original.length; i++) {
        const originalId = substringIdMap[original[i]];
        const changedId = substringIdMap[changed[i]];
        substringDistances[originalId][changedId] = Math.min(
            substringDistances[originalId][changedId],
            cost[i]
        );
    }

    // Step 3: Floyd-Warshall algorithm to calculate minimum distances between substrings
    for (let k = 0; k < numberOfSubstrings; k++) {
        for (let i = 0; i < numberOfSubstrings; i++) {
            for (let j = 0; j < numberOfSubstrings; j++) {
                if (substringDistances[i][k] < Infinity && substringDistances[k][j] < Infinity) {
                    substringDistances[i][j] = Math.min(
                        substringDistances[i][j],
                        substringDistances[i][k] + substringDistances[k][j]
                    );
                }
            }
        }
    }

    // Step 4: Dynamic programming to find minimum cost
    dp[0] = 0;
    for (let i = 0; i < source.length; i++) {
        if (dp[i] === Infinity) {
            continue;
        }
        const sourceChar = source[i];
        const targetChar = target[i];
        if (sourceChar === targetChar) {
            dp[i + 1] = Math.min(dp[i + 1], dp[i]);
        }
        for (const substring of uniqueSubstrings) {
            const substringLength = substring.length;
            if (i + substringLength > source.length) {
                continue;
            }
            const subSource = source.substring(i, i + substringLength);
            const subTarget = target.substring(i, i + substringLength);
            if (!substringIdMap.hasOwnProperty(subSource) || !substringIdMap.hasOwnProperty(subTarget)) {
                continue;
            }
            const sourceId = substringIdMap[subSource];
            const targetId = substringIdMap[subTarget];
            if (substringDistances[sourceId][targetId] !== Infinity) {
                dp[i + substringLength] = Math.min(
                    dp[i + substringLength],
                    dp[i] + substringDistances[sourceId][targetId]
                );
            }
        }
    }

    // Step 5: Return the final result
    return dp[source.length] === Infinity ? -1 : dp[source.length];
}

function createSubstringIdMap(originalAndChangedSubstrings) {
    const substringIdMap = {};
    for (const substring of originalAndChangedSubstrings) {
        if (!(substring in substringIdMap)) {
            substringIdMap[substring] = Object.keys(substringIdMap).length;
        }
    }
    return substringIdMap;
}

function initializeDistanceMatrix(size) {
    return Array.from({ length: size }, () => Array.from({ length: size }, () => Infinity));
}

console.log("Array's solution")
console.log(minimumCostArrII("abcd","acbe",["a","b","c","c","e","d"],["b","c","b","e","b","e"],[2,5,5,1,2,20]));
// Output: 28
console.log(minimumCostArrII("fgh","ghh",["bcd","fgh","thh"],["cde","thh","ghh"],[1,3,5]));
// Output: 8
console.log(minimumCostArrII("fgh","ghh",["fgh","f","g","thh"],["thh","g","h","ghh"],[3,1,1,5]));
// Output: 2 (1+1 < 3+5)
console.log(minimumCostArrII("fgh","f&&",["fgh","fgh"],["f&&","f&"],[11,1]));
// Output: 11
console.log(minimumCostArrII("abcdefgh","acdeeghh",["bcd","fgh","thh"],["cde","thh","ghh"],[1,3,5]));
// Output: 9
console.log(minimumCostArrII("abcdefgh","addddddd",["bcd","defgh"],["ddd","ddddd"],[100,1578]));
// Output: -1
console.log(minimumCostArrII("aaa","aaa",["a"],["e"],[10000]));
// Output: 0


/**
 * @param {string} source
 * @param {string} target
 * @param {string[]} original
 * @param {string[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCostObjII = function(source, target, original, changed, cost) {
  // Step 1: Initialize necessary data structures and variables
  const dp = new Array(source.length + 1).fill(Infinity);
  // console.log("Created dp: ", dp)
  const original_set = new Set(original),
        original_len_set = new Set(original.map(elem => elem.length));
        changed_set = new Set(changed),
        union = new Set([...original_set, ...changed_set]);
  const m = original.length;
  let graph = {};

  // Step 2: Populate substring distances matrix
  for (let i = 0; i < m; i++) {
    graph[original[i]] = graph[original[i]]||{};
    graph[original[i]][changed[i]] = Math.max(graph[original[i]][changed[i]]||0, cost[i])
  }

  // Step 3: Floyd-Warshall algorithm to calculate minimum distances between substrings
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
  // console.log("Calculated graph: ", graph)

  // Step 4: Dynamic programming to find minimum cost
  dp[0] = 0;
  for (let i = 0; i < source.length; i++) {
    if (dp[i] === Infinity) {
      continue;
    }
    const sourceChar = source[i];
    const targetChar = target[i];
    if (sourceChar === targetChar) {
      dp[i + 1] = Math.min(dp[i + 1], dp[i]);
    }
    // console.log("sourceChar: ", sourceChar,"; targetChar: ", targetChar,"; dp: ", dp)

    for (const substringLength of original_len_set) {
      // the rest of the string is less than or equal to the substring
      if (i + substringLength > source.length) {
        continue;
      }

      const subSource = source.substring(i, i + substringLength);
      const subTarget = target.substring(i, i + substringLength);

      // the string contains a substring at the current position
      if (!original_set.has(subSource) || !changed_set.has(subTarget)) {
        continue;
      }

      // get distance
      if (graph[subSource][subTarget] !== Infinity) {
        dp[i + substringLength] = Math.min(
          dp[i + substringLength],
          dp[i] + graph[subSource][subTarget]
        );
        // console.log("        ", "i: ", i, "; i + substringLength: ", i + substringLength, "; dp: ", dp)
      }
    }
  }

  // Step 5: Return the final result
  return dp[source.length] === Infinity ? -1 : dp[source.length];
};


console.log("Object's solution")
console.log(minimumCostObjII("abcd","acbe",["a","b","c","c","e","d"],["b","c","b","e","b","e"],[2,5,5,1,2,20]));
// Output: 28
console.log(minimumCostObjII("fgh","ghh",["bcd","fgh","thh"],["cde","thh","ghh"],[1,3,5]));
// Output: 8
console.log(minimumCostObjII("fgh","ghh",["fgh","f","g","thh"],["thh","g","h","ghh"],[3,1,1,5]));
// Output: 2 (1+1 < 3+5)
console.log(minimumCostObjII("fgh","f&&",["fgh","fgh"],["f&&","f&"],[11,1]));
// Output: 11
console.log(minimumCostObjII("abcdefgh","acdeeghh",["bcd","fgh","thh"],["cde","thh","ghh"],[1,3,5]));
// Output: 9
console.log(minimumCostObjII("abcdefgh","addddddd",["bcd","defgh"],["ddd","ddddd"],[100,1578]));
// Output: -1
console.log(minimumCostObjII("aaa","aaa",["a"],["e"],[10000]));
// Output: 0

// https://leetcode.com/problems/top-k-frequent-words/description/
// 692. Top K Frequent Words

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequentWords = function(words, k) {
  const cnt = new Map();
  for (const word of words) {
      if (!cnt.has(word)) {
          cnt.set(word, 1);
      } else {
          cnt.set(word, cnt.get(word) + 1);
      }
  }
  return [...cnt.entries()]
    .sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]))
    .slice(0, k)
    .map(item => item[0]);
};


console.log("Top K Frequent Words");
console.log(topKFrequentWords(["i","love","leetcode","i","love","coding"], 2));
// Output: ["i","love"]
console.log(topKFrequentWords(["the","day","is","sunny","the","the","the","sunny","is","is"], 4));
// Output: ["the","is","sunny","day"]

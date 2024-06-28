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
      cnt.set(word, (cnt.get(word) || 0) + 1);
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


// ###################
// https://leetcode.com/problems/top-k-frequent-elements/description/
// 347. Top K Frequent Elements


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequentElements = function(nums, k) {
    const cnt = new Map();
    for (const num of nums) {
        cnt.set(num, (cnt.get(num) || 0) + 1);
    }
    return [...cnt.entries()]
      .sort((a, b) => b[1] == a[1] ? a[0] - b[0] :  b[1] - a[1])
      .slice(0, k)
      .map(item => item[0]);
};


console.log("Top K Frequent Elements");
console.log(topKFrequentElements([1,1,1,2,2,3], 2))
// Output: [1,2]
console.log(topKFrequentElements([10,11,13,25,22,30,42,10,], 2))
// Output: [10, 11]

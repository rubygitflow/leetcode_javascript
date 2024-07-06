// https://leetcode.com/problems/top-k-frequent-words/description/
// 692. Top K Frequent Words

/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequentWords = function(words, k = 0) {
  const cnt = new Map();
  for (const word of words) {
      cnt.set(word, (cnt.get(word) || 0) + 1);
  }
  return [...cnt.entries()]
    .sort((a, b) => b[1] !== a[1] ? b[1] - a[1] : a[0].localeCompare(b[0]))
    .slice(0, k===0 ? words.length : Math.abs(k))
    .map(item => item[0]);
};


console.log("Top K Frequent Words");
console.log(topKFrequentWords(["i","love","leetcode","i","love","coding"], 2));
// Output: ["i","love"]
console.log(topKFrequentWords(["the","day","is","sunny","the","the","the","sunny","is","is"], 4));
// Output: ["the","is","sunny","day"]
console.log(topKFrequentWords(["the","the","the","day","sunny","sunny","is","is","is"], 2))
// Output: ["is", "the"]
console.log(topKFrequentWords(["the","the","the","day","sunny","sunny","is","is","is"], 6))
// Output: ["is", "the", "sunny", "day"]
console.log(topKFrequentWords(["that","event","a","was","funny","that","that","that","funny","a","was","was"]));
// Output: ["that","was","a","funny","event"]


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
      .slice(0, k===0 ? nums.length : Math.abs(k))
      .map(item => item[0]);
};


console.log("Top K Frequent Elements");
console.log(topKFrequentElements([1,1,1,2,2,3], 2))
// Output: [1,2]
console.log(topKFrequentElements([10,11,13,25,22,30,42,10,], 2))
// Output: [10, 11]
console.log(topKFrequentElements([1], 1))
// Output: [1]
console.log(topKFrequentElements([10,11,13,25,22,30,42,10], 3))
// Output: [10, 11, 13]
console.log(topKFrequentElements([10,11,13,25,22,30,42,10], 0))
// Output: [10, 11, 13, 22, 25, 30, 42]
console.log(topKFrequentElements([10,11,13,25,22,30,42,10], -2))
// Output: [10, 11]
console.log(topKFrequentElements([1,1,1,2,2,3,0,0,0,5,5,5], 2))
// Output: [0, 1]
console.log(topKFrequentElements([1,1,1,2,2,3,5,5,5,0,0,0], 2))
// Output: [0, 1]

module.exports = { topKFrequentWords, topKFrequentElements };

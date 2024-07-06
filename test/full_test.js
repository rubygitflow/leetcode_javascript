// https://nodejs.org/api/assert.html
const assert = require("assert");

console.log = () => {};

const Solution1443 = require("../collect_all_apples_in_tree");
const Solution136_137 = require("../single_number");
const Solution347_692 = require("../top_k_frequent_words");


it("Top K Frequent Words", function(){
  assert.deepStrictEqual(["i","love"], Solution347_692.topKFrequentWords(["i","love","leetcode","i","love","coding"], 2))
  assert.deepStrictEqual(["the","is","sunny","day"], Solution347_692.topKFrequentWords(["the","day","is","sunny","the","the","the","sunny","is","is"], 4))
  assert.deepStrictEqual(["is", "the"], Solution347_692.topKFrequentWords(["the","the","the","day","sunny","sunny","is","is","is"], 2))
  assert.deepStrictEqual(["is", "the", "sunny", "day"], Solution347_692.topKFrequentWords(["the","the","the","day","sunny","sunny","is","is","is"], 6))
});

it("Top K Frequent Elements", function(){
  assert.deepStrictEqual([1,2], Solution347_692.topKFrequentElements([1,1,1,2,2,3], 2))
  assert.deepStrictEqual([1], Solution347_692.topKFrequentElements([1], 1))
  assert.deepStrictEqual([10, 11], Solution347_692.topKFrequentElements([10,11,13,25,22,30,42,10], 2))
  assert.deepStrictEqual([10, 11, 13], Solution347_692.topKFrequentElements([10,11,13,25,22,30,42,10], 3))
  assert.deepStrictEqual([10, 11, 13, 22, 25, 30, 42], Solution347_692.topKFrequentElements([10,11,13,25,22,30,42,10], 0))
  assert.deepStrictEqual([10, 11], Solution347_692.topKFrequentElements([10,11,13,25,22,30,42,10], -2))
  assert.deepStrictEqual([0, 1], Solution347_692.topKFrequentElements([1,1,1,2,2,3,0,0,0,5,5,5], 2))
  assert.deepStrictEqual([0, 1], Solution347_692.topKFrequentElements([1,1,1,2,2,3,5,5,5,0,0,0], 2))
});


it("Single Number", function(){
  assert.strictEqual(1, Solution136_137.singleNumber([2,2,1,1,1]))
  assert.strictEqual(1, Solution136_137.singleNumber([2,2,1]))
  assert.strictEqual(4, Solution136_137.singleNumber([4,1,2,1,2]))
  assert.strictEqual(1, Solution136_137.singleNumber([1]))
});

// JavaScript-case only
// it("Single Number III", function(){
//   assert.strictEqual(1, Solution136_137.singleNumberIII([2,2,1,1,1]))
//   assert.strictEqual(1, Solution136_137.singleNumberIII([2,2,1]))
//   assert.strictEqual(4, Solution136_137.singleNumberIII([4,1,2,1,2]))
//   assert.strictEqual(1, Solution136_137.singleNumberIII([1]))
// });

it("Single Number II", function(){
  assert.strictEqual(3, Solution136_137.singleNumberII([2,2,3,2]))
  assert.strictEqual(99, Solution136_137.singleNumberII([0,1,0,1,0,1,99]))
  assert.strictEqual(0, Solution136_137.singleNumberII([0,1,0,1,0,1]))
});


it("Minimum Time to Collect All Apples in a Tree", function(){
  assert.strictEqual(8, Solution1443.minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false]));
  assert.strictEqual(6, Solution1443.minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,false,true,false]));
  assert.strictEqual(0, Solution1443.minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,false,false,false,false,false]));
  assert.strictEqual(0, Solution1443.minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[true,false,false,false,false,false,false]));
  assert.strictEqual(6, Solution1443.minTime(9,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6],[4,7],[4,8]],[false,false,false,false,false,false,false,false,true]));
  assert.strictEqual(6, Solution1443.minTime(9,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6],[4,7],[4,8]],[false,true,false,false,true,false,false,false,true]));
});

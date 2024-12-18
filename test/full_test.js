// https://nodejs.org/api/assert.html

const assert = require("assert");

console.log = () => {};

const {
  add_linked_list
} = require("../list_node");

const Solution1443 = require("../collect_all_apples_in_tree");
const Solution136_137 = require("../single_number");
const Solution347_692 = require("../top_k_frequent_words");
const Solution1957 = require("../delete_characters_to_make_fancy_string");
const Solution1955 = require("../count_number_of_special_subsequences");
const Solution1958 = require("../check_if_move_is_legal");
const Solution1974 = require("../minimum_time_to_type_word_using_special_typewriter");
const Solution1975 = require("../maximum_matrix_sum");
const Solution23 = require("../merging_k_sorted_lists");
const Solution870 = require("../advantage_shuffle");
const Solution258_2544 = require("../alternating_digit_sum");
const Solution121_122_123_188_309_714 = require("../best_time_to_buy_and_sell_stock");


it("Best Time to Buy and Sell Stock", function(){
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfit([7,1,5,3,6,4]), 5)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfit([7,6,4,3,1]), 0)
});

it("Best Time to Buy and Sell Stock II", function(){
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitII([7,1,5,3,6,4]), 7)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitII([1,2,3,4,5]), 4)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitII([7,6,4,3,1]), 0)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitII([7]), 0)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitII([]), 0)
});

it("Best Time to Buy and Sell Stock III", function(){
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitIII([3,3,5,0,0,3,1,4]), 6)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitIII([1,2,3,4,5]), 4)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitIII([7,6,4,3,1]), 0)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitIII([7]), 0)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitIII([]), 0)
});

it("Best Time to Buy and Sell Stock IV", function(){
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitIV(2, [2,4,1]), 2)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitIV(2, [3,2,6,7,5,0,3]), 8)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitIV(2, [3,2,6,5,0,3]), 7)
});

it("Best Time to Buy and Sell Stock with Cooldown", function(){
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitWithHold([1,2,3,0,2]), 3)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitWithHold([1]), 0)
});

it("Best Time to Buy and Sell Stock with Transaction Fee", function(){
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitAfterFee([1,3,2,8,4,9], 2), 8)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitAfterFee([1,3,7,5,10,3], 3), 6)
  assert.strictEqual(Solution121_122_123_188_309_714.maxProfitAfterFee([8,9,7,6,8,8], 2), 0)
});


it("Add Digits", function(){
  assert.strictEqual(Solution258_2544.addDigits(38), 2)
  assert.strictEqual(Solution258_2544.addDigits(0), 0)
  assert.strictEqual(Solution258_2544.addDigits(886995), 9)
  assert.strictEqual(Solution258_2544.addDigits(1), 1)
});

it("Alternating Digit Sum", function(){
  assert.strictEqual(Solution258_2544.alternateDigitSum(521), 4)
  assert.strictEqual(Solution258_2544.alternateDigitSum(111), 1)
  assert.strictEqual(Solution258_2544.alternateDigitSum(886996), 0)
  assert.strictEqual(Solution258_2544.alternateDigitSum(885996), -1)
  assert.strictEqual(Solution258_2544.alternateDigitSum(886995), 1)
});


it("Advantage Shuffle", function(){
  assert.deepStrictEqual(Solution870.advantageCount([2,7,11,15], [1,10,4,11]), [2,11,7,15])
  assert.deepStrictEqual(Solution870.advantageCount([12,24,8,32], [13,25,32,11]), [24,32,8,12])
  assert.deepStrictEqual(Solution870.advantageCount([12,24,8], [13,25,32,11]), [])
});


// JavaScript-task only
xit("Merge k Sorted Lists", function(){
  assert.deepStrictEqual(Solution23.mergeKLists([add_linked_list([2,6]),add_linked_list([1,4,5]),add_linked_list([1,3,4])]).stringify(), '[1,1,2,3,4,4,5,6]')
  assert.deepStrictEqual(Solution23.mergeKLists([]).stringify(), '[]')
  assert.deepStrictEqual(Solution23.mergeKLists([add_linked_list([])]).stringify(), '[]')
});


it("Maximum Matrix Sum", function(){
  assert.strictEqual(Solution1975.maxMatrixSum([[1,-1],[-1,1]]), 4)
  assert.strictEqual(Solution1975.maxMatrixSum([[1,2,3],[-1,-2,-3],[1,2,3]]), 16)
});


it("Minimum Time to Type Word Using Special Typewriter", function(){
  assert.strictEqual(Solution1974.minTimeToType("abc"), 5)
  assert.strictEqual(Solution1974.minTimeToType("bza"), 7)
  assert.strictEqual(Solution1974.minTimeToType("zjpc"), 34)
});


it("Check if Move is Legal", function(){
  [board, rMove, cMove, color] = [[[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]], 4, 3, "B"];
  assert(Solution1958.checkMove(board, rMove, cMove, color));
  [board, rMove, cMove, color] = [[[".",".",".",".",".",".",".","."],[".","B",".",".","W",".",".","."],[".",".","W",".",".",".",".","."],[".",".",".","W","B",".",".","."],[".",".",".",".",".",".",".","."],[".",".",".",".","B","W",".","."],[".",".",".",".",".",".","W","."],[".",".",".",".",".",".",".","B"]], 4, 4, "W"];
  assert(!Solution1958.checkMove(board, rMove, cMove, color));
});


// JavaScript-case only
xit("Count Number of Special Subsequences (FOR-loop)", function(){
  assert.strictEqual(Solution1955.countSpecialSubsequences([0,1,2]), 1)
  assert.strictEqual(Solution1955.countSpecialSubsequences([0,1,2,0]), 1)
  assert.strictEqual(Solution1955.countSpecialSubsequences([0,1,2,2]), 3)
  assert.strictEqual(Solution1955.countSpecialSubsequences([2,2,0,0]), 0)
  assert.strictEqual(Solution1955.countSpecialSubsequences([0,1,2,0,1,2]), 7)
});

it("Count Number of Special Subsequences (reduce)", function(){
  assert.strictEqual(Solution1955.countSpecialSubsequencesII([0,1,2]), 1)
  assert.strictEqual(Solution1955.countSpecialSubsequencesII([0,1,2,0]), 1)
  assert.strictEqual(Solution1955.countSpecialSubsequencesII([0,1,2,2]), 3)
  assert.strictEqual(Solution1955.countSpecialSubsequencesII([2,2,0,0]), 0)
  assert.strictEqual(Solution1955.countSpecialSubsequencesII([0,1,2,0,1,2]), 7)
});


it("Delete Characters to Make Fancy String (FOR-loop)", function(){
  assert.strictEqual(Solution1957.makeFancyString("leeetcode"), "leetcode")
  assert.strictEqual(Solution1957.makeFancyString("aaabaaaa"), "aabaa")
  assert.strictEqual(Solution1957.makeFancyString("aab"), "aab")
});

it("Delete Characters to Make Fancy String (reduce)", function(){
  assert.strictEqual(Solution1957.makeFancyString("leeetcode"), "leetcode")
  assert.strictEqual(Solution1957.makeFancyString("aaabaaaa"), "aabaa")
  assert.strictEqual(Solution1957.makeFancyString("aab"), "aab")
});


it("Top K Frequent Words", function(){
  assert.deepStrictEqual(Solution347_692.topKFrequentWords(["i","love","leetcode","i","love","coding"], 2), ["i","love"])
  assert.deepStrictEqual(Solution347_692.topKFrequentWords(["the","day","is","sunny","the","the","the","sunny","is","is"], 4), ["the","is","sunny","day"])
  assert.deepStrictEqual(Solution347_692.topKFrequentWords(["the","the","the","day","sunny","sunny","is","is","is"], 2), ["is", "the"])
  assert.deepStrictEqual(Solution347_692.topKFrequentWords(["the","the","the","day","sunny","sunny","is","is","is"], 6), ["is", "the", "sunny", "day"])
});

it("Top K Frequent Elements", function(){
  assert.deepStrictEqual(Solution347_692.topKFrequentElements([1,1,1,2,2,3], 2), [1,2])
  assert.deepStrictEqual(Solution347_692.topKFrequentElements([1], 1), [1])
  assert.deepStrictEqual(Solution347_692.topKFrequentElements([10,11,13,25,22,30,42,10], 2), [10, 11])
  assert.deepStrictEqual(Solution347_692.topKFrequentElements([10,11,13,25,22,30,42,10], 3), [10, 11, 13])
  assert.deepStrictEqual(Solution347_692.topKFrequentElements([10,11,13,25,22,30,42,10], 0), [10, 11, 13, 22, 25, 30, 42])
  assert.deepStrictEqual(Solution347_692.topKFrequentElements([10,11,13,25,22,30,42,10], -2), [10, 11])
  assert.deepStrictEqual(Solution347_692.topKFrequentElements([1,1,1,2,2,3,0,0,0,5,5,5], 2), [0, 1])
  assert.deepStrictEqual(Solution347_692.topKFrequentElements([1,1,1,2,2,3,5,5,5,0,0,0], 2), [0, 1])
});


// JavaScript-case only
xit("Single Number (FOR-loop)", function(){
  assert.strictEqual(Solution136_137.singleNumber([2,2,1,1,1]), 1)
  assert.strictEqual(Solution136_137.singleNumber([2,2,1]), 1)
  assert.strictEqual(Solution136_137.singleNumber([4,1,2,1,2]), 4)
  assert.strictEqual(Solution136_137.singleNumber([1]), 1)
});

it("Single Number (reduce)", function(){
  assert.strictEqual(Solution136_137.singleNumberIII([2,2,1,1,1]), 1)
  assert.strictEqual(Solution136_137.singleNumberIII([2,2,1]), 1)
  assert.strictEqual(Solution136_137.singleNumberIII([4,1,2,1,2]), 4)
  assert.strictEqual(Solution136_137.singleNumberIII([1]), 1)
});

it("Single Number II", function(){
  assert.strictEqual(Solution136_137.singleNumberII([2,2,3,2]), 3)
  assert.strictEqual(Solution136_137.singleNumberII([0,1,0,1,0,1,99]), 99)
  assert.strictEqual(Solution136_137.singleNumberII([0,1,0,1,0,1]), 0)
});


it("Minimum Time to Collect All Apples in a Tree", function(){
  assert.strictEqual(Solution1443.minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,true,true,false]), 8);
  assert.strictEqual(Solution1443.minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,true,false,false,true,false]), 6);
  assert.strictEqual(Solution1443.minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[false,false,false,false,false,false,false]), 0);
  assert.strictEqual(Solution1443.minTime(7,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6]],[true,false,false,false,false,false,false]), 0);
  assert.strictEqual(Solution1443.minTime(9,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6],[4,7],[4,8]],[false,false,false,false,false,false,false,false,true]), 6);
  assert.strictEqual(Solution1443.minTime(9,[[0,1],[0,2],[1,4],[1,5],[2,3],[2,6],[4,7],[4,8]],[false,true,false,false,true,false,false,false,true]), 6);
});

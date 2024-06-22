// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
// 121. Best Time to Buy and Sell Stock

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  if (prices.length < 2) return 0;

  let [max_price, l, r] = [0, 0, 1];
  while (r < prices.length){
    if (prices[l] < prices[r]) {
      max_price = Math.max(max_price, prices[r] - prices[l])
    } else {
      l = r
    }
    r++
  }
  return max_price;
};

console.log("Best Time to Buy and Sell Stock")
console.log(maxProfit([7,1,5,3,6,4]))
// Output: 5
console.log(maxProfit([7,6,4,3,1]))
// Output: 0

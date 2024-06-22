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


// ######################
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/
// 122. Best Time to Buy and Sell Stock II


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitII = function(prices) {
  if (prices.length < 2) return 0;

  let profit = 0;
  let minPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    profit += Math.max(0, prices[i] - minPrice);
    minPrice = prices[i];
  }
  return profit;
};


console.log("Best Time to Buy and Sell Stock II")
console.log(maxProfitII([7,1,5,3,6,4]))
// Output: 7
console.log(maxProfitII([1,2,3,4,5]))
// Output: 4
console.log(maxProfitII([7,6,4,3,1]))
// Output: 0
console.log(maxProfitII([7]))
// Output: 0
console.log(maxProfitII([]))
// Output: 0

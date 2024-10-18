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


// ######################
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/description/
// 123. Best Time to Buy and Sell Stock III

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitIII = function(prices) {
  if (prices.length < 2) return 0;

  let profit = [0];
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];
    const last_ind = profit.length - 1;
    if (curr > buy) {
      profit[last_ind] += curr - buy
    } else if (curr < buy){
      profit.push(0)
    }
    buy = curr
  }
  return profit
    .sort(function(a, b){return b - a})
    .slice(0,2)
    .reduce((accumulator, current) => accumulator + current, 0);
};


console.log("Best Time to Buy and Sell Stock III")
console.log(maxProfitIII([3,3,5,0,0,3,1,4]))
// Output: 6
console.log(maxProfitIII([1,2,3,4,5]))
// Output: 4
console.log(maxProfitIII([7,6,4,3,1]))
// Output: 0
console.log(maxProfitIII([7]))
// Output: 0
console.log(maxProfitIII([]))
// Output: 0


// ######################
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/description/
// 188. Best Time to Buy and Sell Stock IV

/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitIV = function(k, prices) {
  if (prices.length < 2) return 0;

  let profit = [0];
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    const curr = prices[i];
    const last_ind = profit.length - 1;
    if (curr > buy) {
      profit[last_ind] += curr - buy
    } else if (curr < buy){
      profit.push(0)
    }
    buy = curr
  }
  return profit
    .sort(function(a, b){return b - a})
    .slice(0,k)
    .reduce((accumulator, current) => accumulator + current, 0);
};


console.log("Best Time to Buy and Sell Stock IV")
console.log(maxProfitIV(2, [2,4,1]))
// Output: 2
console.log(maxProfitIV(2, [3,2,6,7,5,0,3]))
// Output: 8
console.log(maxProfitIV(2, [3,2,6,5,0,3]))
// Output: 7


// ######################
//  https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
//  309. Best Time to Buy and Sell Stock with Cooldown
// Explanation: https://algo.monster/liteproblems/309
//|HRD|

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitWithHold = function(prices) {
  if (prices.length < 2) return 0;

  let [sold, hold, rest] = [0, -prices[0], 0];
  for (const price of prices.slice(1)) {
      [sold, hold, rest] = [Math.max(hold + price, sold),
                            Math.max(rest - price, hold),
                            Math.max(sold, hold, rest)];
  }
  return Math.max(sold, hold, rest);
};

console.log("Best Time to Buy and Sell Stock with Cooldown")
console.log(maxProfitWithHold([1,2,3,0,2]))
// Output: 3
console.log(maxProfitWithHold([1]))
// Output: 0


// ######################
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/description/
// 714. Best Time to Buy and Sell Stock with Transaction Fee
// Explanation: https://algo.monster/liteproblems/714

/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfitAfterFee = function(prices, fee) {
  let n = prices.length;
  let [sell, buy] = [0, -prices[0]]
  for(let i = 1; i < n; i++) {
    let tmp = buy;
    buy = Math.max(buy, sell - prices[i])
    sell = Math.max(sell, tmp + prices[i] - fee)
  }
  return sell
};


console.log("Best Time to Buy and Sell Stock with Transaction Fee")
console.log(maxProfitAfterFee([1,3,2,8,4,9], 2))
// Output: 8
console.log(maxProfitAfterFee([1,3,7,5,10,3], 3))
// Output: 6
console.log(maxProfitAfterFee([8,9,7,6,8,8], 2))
// Output: 0

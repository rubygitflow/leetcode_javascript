// https://leetcode.com/problems/minimum-money-required-before-transactions/description/
// 2412. Minimum Money Required Before Transactions
// Explanation from https://algo.monster/liteproblems/2412

/**
 * @param {number[][]} transactions
 * @return {number}
 */
var minimumMoney = function(transactions) {
  let total_negative_cash_flow = 0
  for(const [cost, cashback] of transactions) {
    total_negative_cash_flow += Math.max(0, cost - cashback)
  }
  let max_additional_money_required = 0
  for(const [cost, cashback] of transactions) {
    if (cost > cashback){
      max_additional_money_required = Math.max(
        max_additional_money_required,
        total_negative_cash_flow + cashback
      )
    } else {
      max_additional_money_required = Math.max(
        max_additional_money_required,
        total_negative_cash_flow + cost
      )
    }
  }
  return max_additional_money_required
};

console.log(minimumMoney([[2,1],[5,0],[4,2]]))
// Output: 10
console.log(minimumMoney([[3,0],[0,3]]))
// Output: 3
console.log(minimumMoney([[7, 2], [5, 0], [4, 1], [5, 8], [5, 9], [0, 10]]))
// Output: 18

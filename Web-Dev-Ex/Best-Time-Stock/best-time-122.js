// // 122. Best Time to Buy and Sell Stock 2
// Find pairs of buying and selling prices
// such that the buying price is lower than the nearest higher selling price.

// Keep track of the minimum price encountered so far.
// Whenever encounter a price higher than the current minimum,
// calculate the profit by selling at the current price
// update the maximum profit if it's greater than the previous maximum.

var maxProfit = function (prices) {
  let minPrice = Infinity;
  let profit = 0;
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);
    if (minPrice < prices[i]) {
      profit = prices[i] - minPrice;
      totalProfit += profit;
    }
  }
  return totalProfit;
};

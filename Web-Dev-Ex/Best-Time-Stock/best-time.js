// 121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  // Handle edge case
  if (prices.length < 2) return 0;
  // Initialize minPrice to a large value
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    // Update the minPrice to the minimum of current price and minPrice
    minPrice = Math.min(minPrice, prices[i]);
    // Update the maxProfiet to the maximum of current profit and (current profit - minPrice)
    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
  }
  return maxProfit;
};

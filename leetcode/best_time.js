// 121. Best Time to Buy and Sell Stock

// j > i, max(prices[j]-prices[i]);
// Iterate through the prices, keep track of min price
// Update the min price, for each day, calculate the profit (current price-min price)
// Keep track the max profit
var maxProfit = function (prices) {
  let minPricePointer = 0;
  let currentDay = 1;
  let currentProfit = 0;
  for (let i = currentDay; i < prices.length; i++) {
    if (prices[minPricePointer] > prices[i]) {
      minPricePointer++;
    } else {
      currentProfit = prices[i] - prices[currentDay];
    }
}
return currentProfit;
};

// 121. Best Time to Buy and Sell Stock
var maxProfit = function (prices) {
  let buyDay = 0;
  let currentDay = 1;
  let maxProfit = 0;
  for (let i = currentDay; i < prices.length; i++) {
    if (prices[buyDay] > prices[i]) {
      buyDay = i;
    } else {
      currentDay = i;
      if (prices[i] - prices[buyDay] > maxProfit) {
        maxProfit = prices[i] - prices[buyDay];
      }
    }
  }
  return maxProfit;
};

var maxProfit = function (prices) {
    let minPricePointer = 0;
    let currentDay = 1;
    let currentProfit = 0;
    for (let i = currentDay; i < prices.length; i++) {
      if (prices[minPricePointer] > prices[i]) {
        minPricePointer = i;
      } else {
        currentDay = i;
        currentProfit = prices[i] - prices[minPricePointer];
      }
    }
    return currentProfit;
  };
// [7,1,5,3,6,4]
// prifit = 5?

function maxProfit(prices) {
  // original price
  let buyPrice = prices[0]; //7
  // keep track of profit
  let profit = 0;
  // go through the array & see if there is profit
  for (let i = 0; i < prices.length - 1; i++) {
    let tempProfit = prices[i + 1] - prices[i];
    if (tempProfit > 0) {
      if (prices[i] < buyPrice) {
        buyPrice = prices[i];
      }
      if (prices[i + 1] - buyPrice > profit) {
        profit = prices[i + 1] - buyPrice;
      }
    }
    return profit;
  }
}

// Best time to buy and sell stock
// Example 1: Input: prices = [7,1,5,3,6,4] Output: 5 
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. 
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//let prices = [7,1,5,3,6,4];
let prices = [7,6,4,3,1];

function calculateProfit(prices) {

    maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        for(let j = i + 1; j < prices.length; j++) {
            profit = prices[j] - prices[i];
            maxProfit = profit > maxProfit ? profit : maxProfit;
        }
    }

    return maxProfit;
}

console.log(calculateProfit(prices));
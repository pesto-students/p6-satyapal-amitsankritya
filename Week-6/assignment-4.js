// Best time to buy and sell stock
// Example 1: Input: prices = [7,1,5,3,6,4] Output: 5 
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5. 
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

let prices = [7,1,5,3,6,4];
// let prices = [7,6,4,3,1,3];

function calculateProfit(prices) {

    let minPrice = prices[0];
    let maxProfit = 0;
    let profit = 0;

    for(let i = 1; i < prices.length; i++) {
        
        // checking profit at each iteration
        profit = prices[i] - minPrice;

        // keeping track of the minimum buy value
        if(minPrice > prices[i]) {
            minPrice = prices[i];
        }

        // keeping track of maximum profit
        if(maxProfit < profit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

console.log(calculateProfit(prices));

// Time Complexcity: O(n)
// Space Complexcity: O(1)
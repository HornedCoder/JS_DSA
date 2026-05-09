/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lowest = prices[0];
    let profit = 0;
    for (p of prices){
        if (p < lowest){
            lowest = p;
        }
        profit = Math.max(profit, p-lowest);
    }
    return profit;
    
};

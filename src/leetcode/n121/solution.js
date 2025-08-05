/**
 * @param {number[]} prices
 * @returns {number}
 */
function maxProfit(prices) {
    let [buy, profit] = [Infinity, 0];
    for (const price of prices) {
        buy = Math.min(buy, price);
        profit = Math.max(profit, price - buy);
    }
    return profit;
}

module.exports = {maxProfit};

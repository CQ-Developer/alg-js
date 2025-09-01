/**
 * @param {number[]} prices
 * @returns {number[]}
 */
function finalPricesA(prices) {
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] >= prices[j]) {
                prices[i] -= prices[j];
                break;
            }
        }
    }
    return prices;
}

/**
 * @param {number[]} prices
 * @returns {number[]}
 */
function finalPricesB(prices) {
    const stack = [0];
    for (let i = prices.length - 1; i >= 0; i--) {
        const x = prices[i];
        while (stack.length > 1 && x < stack[stack.length - 1]) {
            stack.pop();
        }
        prices[i] -= stack[stack.length - 1];
        stack.push(x);
    }
    return prices;
}

module.exports = { finalPricesA, finalPricesB };

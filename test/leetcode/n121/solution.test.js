const {maxProfit} = require('../../../src/leetcode/n121/solution');

const f = test.each([
    {prices: [7, 1, 5, 3, 6, 4], result: 5},
    {prices: [7, 6, 4, 3, 1], result: 0}
]);

f('maxProfit($prices)', ({prices, result}) => {
    expect(maxProfit(prices)).toBe(result);
});

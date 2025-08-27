const { StockSpannerA, StockSpannerB } = require('../../../src/leetcode/n901/solution');

const f = test.each([
    { prices: [100, 80, 60, 70, 60, 75, 85], result: [1, 1, 1, 2, 1, 4, 6] }
]);

f('StockSpannerA', ({ prices, result }) => {
    const a = new StockSpannerA();
    for (let i = 0; i < 7; i++) {
        expect(a.next(prices[i])).toBe(result[i]);
    }
});

f('StockSpannerB', ({ prices, result }) => {
    const a = new StockSpannerB();
    for (let i = 0; i < 7; i++) {
        expect(a.next(prices[i])).toBe(result[i]);
    }
});

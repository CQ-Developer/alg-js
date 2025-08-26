const { finalPricesA, finalPricesB } = require('../../../src/leetcode/n1475/solution');

const f = test.each([
    { prices: [8, 4, 6, 2, 3], result: [4, 2, 4, 2, 3] },
    { prices: [1, 2, 3, 4, 5], result: [1, 2, 3, 4, 5] },
    { prices: [10, 1, 1, 6], result: [9, 0, 1, 6] }
]);

f('finalPricesA($prices)', ({ prices, result }) => {
    expect(finalPricesA(Array.of(...prices))).toEqual(result);
});

f('finalPricesB($prices)', ({ prices, result }) => {
    expect(finalPricesB(Array.of(...prices))).toEqual(result);
});

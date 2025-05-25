
const { maximumTastiness } = require('src/leetcode/n2517/solution');

const data = [
    { price: [13, 5, 1, 8, 21, 2], k: 3, result: 8 },
    { price: [1, 3, 1], k: 2, result: 2 },
    { price: [7, 7, 7, 7], k: 2, result: 0 }
];

const f = test.each(data);

f('maximumTastiness($price, $k)', ({ price, k, result }) => {
    expect(maximumTastiness(price, k)).toBe(result);
});
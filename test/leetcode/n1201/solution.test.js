const { nthUglyNumber } = require('../../../src/leetcode/n1201/solution');

const data = [
    { n: 3, a: 2, b: 3, c: 5, ans: 4 },
    { n: 4, a: 2, b: 3, c: 4, ans: 6 },
    { n: 5, a: 2, b: 11, c: 13, ans: 10 }
];

const f = test.each(data);

f('nthUglyNumber($n, $a, $b, $c)', ({ n, a, b, c, ans }) => {
    expect(nthUglyNumber(n, a, b, c)).toBe(ans);
});

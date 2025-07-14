const { nthMagicalNumber } = require('../../../src/leetcode/n878/solution');

const data = [
    { n: 1, a: 2, b: 3, ans: 2 },
    { n: 4, a: 2, b: 3, ans: 6 }
];

const f = test.each(data);

f('nthMagicalNumber($n, $a, $b)', ({ n, a, b, ans }) => {
    expect(nthMagicalNumber(n, a, b)).toBe(ans);
});

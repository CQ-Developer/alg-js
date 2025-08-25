const { calculateScore } = require('../../../src/leetcode/n3412/solution');

test.each([
    { s: 'aczzx', result: 5 },
    { s: 'abcdef', result: 0 }
])('calculateScore($s)', ({ s, result }) => {
    expect(calculateScore(s)).toBe(result);
});

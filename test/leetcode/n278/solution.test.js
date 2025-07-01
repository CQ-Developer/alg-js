const { solution } = require('src/leetcode/n278/solution');

test('test1', () => {
    expect(solution((v) => v >= 4)(5)).toBe(4);
});

test('test2', () => {
    expect(solution((v) => v >= 1)(1)).toBe(1);
});

const { findKthNumber } = require('../../../src/leetcode/n668/solution');

test('test_1', () => {
    expect(findKthNumber(3, 3, 5)).toBe(3);
});

test('test_2', () => {
    expect(findKthNumber(2, 3, 6)).toBe(6);
});

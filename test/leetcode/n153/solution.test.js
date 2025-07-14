const { findMin } = require('../../../src/leetcode/n153/solution');

test('test_1', () => {
    expect(findMin([3, 4, 5, 1, 2])).toBe(1);
});

test('test_2', () => {
    expect(findMin([4, 5, 6, 7, 0, 1, 2])).toBe(0);
});

test('test_3', () => {
    expect(findMin([11, 13, 15, 17])).toBe(11);
});

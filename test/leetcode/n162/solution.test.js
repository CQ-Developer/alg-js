const { findPeakElement } = require('../../../src/leetcode/n162/solution');

test('test1', () => {
    expect(findPeakElement([1, 2, 3, 1])).toBe(2);
}, 3000);

test('test2', () => {
    expect([1, 5]).toContain(findPeakElement([1, 2, 1, 3, 5, 6, 4]));
}, 3000);

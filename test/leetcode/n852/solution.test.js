const { peakIndexInMountainArray } = require('../../../src/leetcode/n852/solution');

test('test_1', () => {
    expect(peakIndexInMountainArray([0, 1, 0])).toBe(1);
});

test('test_2', () => {
    expect(peakIndexInMountainArray([0, 2, 1, 0])).toBe(1);
});

test('test_3', () => {
    expect(peakIndexInMountainArray([0, 10, 5, 2])).toBe(1);
});

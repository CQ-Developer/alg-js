const { findInMountainArray } = require('src/leetcode/n1095/solution');

test('test1', () => {
    const arr = [1, 2, 3, 4, 5, 3, 1];
    const mountainArr = { get: (index) => arr[index], length: () => arr.length };
    expect(findInMountainArray(3, mountainArr)).toBe(2);
});

test('test2', () => {
    const arr = [0, 1, 2, 4, 2, 1];
    const mountainArr = { get: (index) => arr[index], length: () => arr.length };
    expect(findInMountainArray(3, mountainArr)).toBe(-1);
});

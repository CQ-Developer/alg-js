const { findPeakGrid } = require('src/leetcode/n1901/solution');

test('test1', () => {
    expect(findPeakGrid([[1, 4], [3, 2]])).toEqual([0, 1]);
});

test('test2', () => {
    expect(findPeakGrid([[10, 20, 15], [21, 30, 14], [7, 16, 32]])).toEqual([1, 1]);
});

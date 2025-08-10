const { countNicePairs } = require('../../../src/leetcode/n1814/solution');

test.each([
    { nums: [42, 11, 1, 97], result: 2 },
    { nums: [13, 10, 35, 24, 76], result: 4 }
])('countNicePairs($nums)', ({ nums, result }) => {
    expect(countNicePairs(nums)).toBe(result);
});

const { countBadPairs } = require('../../../src/leetcode/n2364/solution');

test.each([
    { nums: [4, 1, 3, 3], result: 5 },
    { nums: [1, 2, 3, 4, 5], result: 0 }
])('countBadPairs($nums)', ({ nums, result }) => {
    expect(countBadPairs(nums)).toBe(result);
});

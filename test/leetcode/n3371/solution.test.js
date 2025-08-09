const { getLargestOutlier } = require('../../../src/leetcode/n3371/solution');

test.each([
    { nums: [2, 3, 5, 10], result: 10 },
    { nums: [-2, -1, -3, -6, 4], result: 4 },
    { nums: [1, 1, 1, 1, 1, 5, 5], result: 5 }
])('getLargestOutlier($nums)', ({ nums, result }) => {
    expect(getLargestOutlier(nums)).toBe(result);
});

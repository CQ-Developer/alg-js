const { numberOfSubsequences } = require('../../../src/leetcode/n3404/solution');

test.each([
    { nums: [1, 2, 3, 4, 3, 6, 1], result: 1 },
    { nums: [3, 4, 3, 4, 3, 4, 3, 4], result: 3 }
])('numberOfSubsequences($nums)', ({ nums, result }) => {
    expect(numberOfSubsequences(nums)).toBe(result);
});

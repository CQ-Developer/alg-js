const { maxScore } = require('../../../src/leetcode/n3221/solution');

test.each([
    { nums: [1, 5, 8], ans: 16 },
    { nums: [4, 5, 2, 8, 9, 1, 3], ans: 42 }
])('maxScore($nums)', ({ nums, ans }) => {
    expect(maxScore(nums)).toBe(ans);
});

const { numberOfSubarrays } = require('../../../src/leetcode/n3113/solution.js');

test.each([
    { "nums": [1, 4, 3, 3, 2], "ans": 6 },
    { "nums": [3, 3, 3], "ans": 6 },
    { "nums": [1], "ans": 1 }
])('numberOfSubarrays($nums)', ({ nums, ans }) => {
    expect(numberOfSubarrays(nums)).toBe(ans);
});

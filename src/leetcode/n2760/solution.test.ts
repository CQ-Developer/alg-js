import { longestAlternatingSubarray } from './solution.ts';

test.each([
    { nums: [3, 2, 5, 4], threshold: 5, ans: 3 },
    { nums: [1, 2], threshold: 2, ans: 1 },
    { nums: [2, 3, 4, 5], threshold: 4, ans: 3 },
])('longestAlternatingSubarray($nums, $threshold)', ({ nums, threshold, ans }) => {
    expect(longestAlternatingSubarray(nums, threshold)).toBe(ans);
});

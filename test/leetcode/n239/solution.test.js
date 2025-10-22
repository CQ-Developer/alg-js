const { maxSlidingWindow } = require('../../../src/leetcode/n239/solution');

test.each([
    { nums: [1, 3, -1, -3, 5, 3, 6, 7], k: 3, ans: [3, 3, 5, 5, 6, 7] },
    { nums: [1], k: 1, ans: [1] }
])('maxSlidingWindow', ({ nums, k, ans }) => {
    expect(maxSlidingWindow(nums, k)).toEqual(ans);
});

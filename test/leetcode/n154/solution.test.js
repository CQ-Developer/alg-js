const { findMin } = require('src/leetcode/n154/solution');

test.each([
    { nums: [1, 3, 5], res: 1 },
    { nums: [2, 2, 2, 0, 1], res: 0 }
])('findMin($nums)', ({ nums, res }) => {
    expect(findMin(nums)).toBe(res);
});

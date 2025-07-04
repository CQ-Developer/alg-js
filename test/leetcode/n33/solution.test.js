const { search } = require('src/leetcode/n33/solution');

test.each([
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, res: 4 },
    { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, res: -1 },
    { nums: [1], target: 0, res: -1 },
])('search($nums, $target)', ({ nums, target, res }) => {
    expect(search(nums, target)).toBe(res);
});

const { search } = require('src/leetcode/n81/solution');

test.each([
    { nums: [2, 5, 6, 0, 0, 1, 2], target: 0, expected: true },
    { nums: [2, 5, 6, 0, 0, 1, 2], target: 3, expected: false },
])('search($nums, $target)', ({ nums, target, result }) => {
    expect(() => search(nums, target)).toThrow('skip');
});

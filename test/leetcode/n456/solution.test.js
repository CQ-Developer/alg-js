const { find132pattern } = require('../../../src/leetcode/n456/solution');

const f = test.each([
    { nums: [1, 2, 3, 4], result: false },
    { nums: [3, 1, 4, 2], result: true },
    { nums: [-1, 3, 2, 0], result: true }
]);

f('find132pattern($nums)', ({ nums, result }) => {
    expect(find132pattern(nums)).toBe(result);
});

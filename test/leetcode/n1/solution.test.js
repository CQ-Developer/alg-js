const { twoSum } = require('../../../src/leetcode/n1/solution');

const f = test.each([
    { nums: [2, 7, 11, 15], target: 9, result: [0, 1] },
    { nums: [3, 2, 4], target: 6, result: [1, 2] },
    { nums: [3, 3], target: 6, result: [0, 1] }
]);

f('twoSum($nums, $target)', ({ nums, target }) => {
    expect(twoSum(nums, target)).toBeUndefined();
});

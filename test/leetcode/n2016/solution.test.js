const {maximumDifference} = require('../../../src/leetcode/n2016/solution');

const f = test.each([
    {nums: [7, 1, 5, 4], result: 4},
    {nums: [9, 4, 3, 2], result: -1},
    {nums: [1, 5, 2, 10], result: 9}
]);

f('maximumDifference($nums)', ({nums, result}) => {
    expect(maximumDifference(nums)).toBe(result);
});

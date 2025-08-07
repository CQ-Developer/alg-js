const {maximumSum} = require('../../../src/leetcode/n2342/solution');

test.each([
    {nums: [18, 43, 36, 13, 7], result: 54},
    {nums: [10, 12, 19, 14], result: -1}
])('maximumSum($nums)', ({nums, result}) => {
    expect(maximumSum(nums)).toBe(result);
});

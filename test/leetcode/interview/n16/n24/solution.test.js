const {pairSums} = require('../../../../../src/leetcode/interview/n16/n24/solution');

test.each([
    {nums: [5, 6, 5], target: 11, result: [[5, 6]]},
    {nums: [5, 6, 5, 6], target: 11, result: [[5, 6], [5, 6]]}
])('pairSums($nums, $target)', ({nums, target, result}) => {
    expect(pairSums(nums, target)).toEqual(result);
});

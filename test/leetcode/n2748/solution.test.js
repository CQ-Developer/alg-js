const {countBeautifulPairs} = require('../../../src/leetcode/n2748/solution');

test.each([
    {nums: [2, 5, 1, 4], result: 5},
    {nums: [11, 21, 12], result: 2}
])('countBeautifulPairs($nums)', ({nums, result}) => {
    expect(countBeautifulPairs(nums)).toBe(result);
});

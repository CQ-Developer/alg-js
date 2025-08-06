const { maxSum } = require('../../../src/leetcode/n2815/solution');

const f = test.each([
    { nums: [112, 131, 411], result: -1 },
    { nums: [2536, 1613, 3366, 162], result: 5902 },
    { nums: [51, 71, 17, 24, 42], result: 88 }
]);

f('maxSum($nums)', ({ nums, result }) => {
    expect(maxSum(nums)).toBe(result);
});

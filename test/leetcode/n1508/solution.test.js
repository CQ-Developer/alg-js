const { rangeSum, rangeSumA } = require('src/leetcode/n1508/solution');

const data = [
    { nums: [1, 2, 3, 4], n: 4, left: 1, right: 5, ans: 13 },
    { nums: [1, 2, 3, 4], n: 4, left: 3, right: 4, ans: 6 },
    { nums: [1, 2, 3, 4], n: 4, left: 1, right: 10, ans: 50 }
];

const f = test.each(data);

f('rangeSum($nums, $n, $left, $right)', ({ nums, n, left, right }) => {
    expect(() => rangeSum(nums, n, left, right)).toThrow('skip');
});

f('rangeSumA($nums, $n, $left, $right)', ({ nums, n, left, right, ans }) => {
    expect(rangeSumA(nums, n, left, right)).toBe(ans);
});

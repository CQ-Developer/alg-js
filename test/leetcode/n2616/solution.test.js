const minimizeMax = require('../../../src/leetcode/n2616/solution');

const data = [
    { nums: [10, 1, 2, 7, 1, 3], p: 2, res: 1 },
    { nums: [4, 2, 1, 2], p: 1, res: 0 },
    { nums: [3, 4, 2, 3, 2, 1, 2], p: 3, res: 1 }
];

const fn = test.each(data);

fn('minimizeMax($nums, $p)', ({ nums, p, res }) => expect(minimizeMax(nums, p)).toBe(res));

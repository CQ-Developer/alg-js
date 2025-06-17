const { kSmallestPairs } = require('src/leetcode/n373/solution');

const data = [
    { nums1: [1, 7, 11], nums2: [2, 4, 6], k: 3, res: [[1, 2], [1, 4], [1, 6]] },
    { nums1: [1, 1, 2], nums2: [1, 2, 3], k: 2, res: [[1, 1], [1, 1]] }
];

const f = test.each(data);

f('kSmallestPairs($nums1, $nums2, $k)', ({ nums1, nums2, k }) => {
    expect(() => kSmallestPairs(nums1, nums2, k)).toThrow('skip');
});

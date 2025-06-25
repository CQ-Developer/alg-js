const { kthSmallestProduct, kthSmallestProductA } = require('src/leetcode/n2040/solution');

const data = [
    { nums1: [2, 5], nums2: [3, 4], k: 2, ans: 8 },
    { nums1: [-4, -2, 0, 3], nums2: [2, 4], k: 6, ans: 0 },
    { nums1: [-2, -1, 0, 1, 2], nums2: [-3, -1, 2, 4, 5], k: 3, ans: -6 }
];

const f = test.each(data);

f('kthSmallestProduct($nums1, $nums2, $k)', ({ nums1, nums2, k }) => {
    expect(() => kthSmallestProduct(nums1, nums2, k)).toThrow('skip');
});

f('kthSmallestProductA($nums1, $nums2, $k)', ({ nums1, nums2, k, ans }) => {
    expect(kthSmallestProductA(nums1, nums2, k)).toBe(ans);
});

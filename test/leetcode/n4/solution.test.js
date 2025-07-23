const {findMedianSortedArrays} = require('../../../src/leetcode/n4/solution');

const f = test.each([
    {nums1: [1, 3], nums2: [2], result: 2},
    {nums1: [1, 2], nums2: [3, 4], result: 2.5}
]);

f('findMedianSortedArrays($nums1, $nums2)', ({nums1, nums2}) => {
    expect(findMedianSortedArrays(nums1, nums2)).toBeUndefined();
});

const { nextGreaterElement } = require('../../../src/leetcode/n496/solution');

const f = test.each([
    { nums1: [4, 1, 2], nums2: [1, 3, 4, 2], result: [-1, 3, -1] },
    { nums1: [2, 4], nums2: [1, 2, 3, 4], result: [3, -1] }
]);

f('nextGreaterElement($nums1, $nums2)', ({ nums1, nums2, result }) => {
    expect(nextGreaterElement(nums1, nums2)).toEqual(result);
});

import { maxNumber } from './solution.ts';

const testCases = test.each([
    { nums1: [3, 4, 6, 5], nums2: [9, 1, 2, 5, 8, 3], k: 5, ans: [9, 8, 6, 5, 3] },
    { nums1: [6, 7], nums2: [6, 0, 4], k: 5, ans: [6, 7, 6, 0, 4] },
    { nums1: [3, 9], nums2: [8, 9], k: 3, ans: [9, 8, 9] },
]);

testCases('maxNumber($nums1, $nums2, $k)', ({ nums1, nums2, k, ans }) => expect(maxNumber(nums1, nums2, k)).toEqual(ans));

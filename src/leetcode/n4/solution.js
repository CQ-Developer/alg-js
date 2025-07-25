/**
 * @abstract
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
function findMedianSortedArrays(nums1, nums2) {
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
function findMedianSortedArraysA(nums1, nums2) {
    const nums = [...nums1, ...nums2];
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const i = Math.floor(n / 2);
    if ((n % 2) == 0) {
        return (nums[i - 1] + nums[i]) / 2;
    }
    return nums[i];
}

module.exports = {findMedianSortedArrays, findMedianSortedArraysA}

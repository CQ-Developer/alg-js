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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
function findMedianSortedArraysB(nums1, nums2) {
    const nums = [];
    const [m, n] = [nums1.length, nums2.length];
    let [i, j] = [0, 0];
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            nums.push(nums1[i++]);
        } else {
            nums.push(nums2[j++]);
        }
    }
    while (i < m) {
        nums.push(nums1[i++]);
    }
    while (j < n) {
        nums.push(nums2[j++]);
    }
    const k = Math.floor(nums.length / 2);
    return nums.length % 2 != 0 ? nums[k] : (nums[k - 1] + nums[k]) / 2;
}

module.exports = {findMedianSortedArrays, findMedianSortedArraysA, findMedianSortedArraysB}

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
    return n % 2 == 0 ? (nums[i - 1] + nums[i]) / 2 : nums[i];
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
    return nums.length % 2 == 0 ? (nums[k - 1] + nums[k]) / 2 : nums[k];
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number}
 */
function findMedianSortedArraysC(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }
    const [m, n] = [nums1.length, nums2.length];
    let [l, r] = [-1, m];
    while (l + 1 < r) {
        const i = l + Math.floor((r - l) / 2);
        const j = Math.floor((m + n + 1) / 2) - i - 2;
        if (nums1[i] <= nums2[j + 1]) {
            l = i;
        } else {
            r = i;
        }
    }
    const [i, j] = [l, Math.floor((m + n + 1) / 2) - l - 2];
    const ai = i >= 0 ? nums1[i] : -Infinity;
    const bj = j >= 0 ? nums2[j] : -Infinity;
    const ai1 = i + 1 < m ? nums1[i + 1] : Infinity;
    const bj1 = j + 1 < n ? nums2[j + 1] : Infinity;
    const max1 = Math.max(ai, bj);
    const min2 = Math.min(ai1, bj1);
    return (m + n) % 2 > 0 ? max1 : (max1 + min2) / 2;
}

module.exports = { findMedianSortedArrays, findMedianSortedArraysA, findMedianSortedArraysB, findMedianSortedArraysC }

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @abstract
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @returns {number[][]}
 */
function kSmallestPairs(nums1, nums2, k) {
    throw new Error('skip');
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @returns {number[][]}
 */
function kSmallestPairsA(nums1, nums2, k) {
    const heap = new MinPriorityQueue((a) => a[0]);
    for (let i = 0; i < Math.min(k, nums1.length); i++) {
        heap.enqueue([nums1[i] + nums2[0], i, 0]);
    }
    const res = [];
    while (res.length < k) {
        const [_, i, j] = heap.dequeue();
        res.push([nums1[i], nums2[j]]);
        if (j + 1 < nums2.length) {
            heap.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }
    return res;
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @returns {number[][]}
 */
function kSmallestPairsB(nums1, nums2, k) {
    const heap = new MinPriorityQueue((a) => a[0]);
    heap.enqueue([nums1[0] + nums2[0], 0, 0]);
    const res = [];
    while (res.length < k) {
        const [_, i, j] = heap.dequeue();
        res.push([nums1[i], nums2[j]]);
        if (j == 0 && i + 1 < nums1.length) {
            heap.enqueue([nums1[i + 1] + nums2[0], i + 1, 0]);
        }
        if (j + 1 < nums2.length) {
            heap.enqueue([nums1[i] + nums2[j + 1], i, j + 1]);
        }
    }
    return res;
}

module.exports = { kSmallestPairs, kSmallestPairsA, kSmallestPairsB };

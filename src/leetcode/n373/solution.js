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

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @returns {number[][]}
 */
function kSmallestPairsC(nums1, nums2, k) {
    const [m, n] = [nums1.length, nums2.length];
    /**
     * @param {number} x
     * @returns {number}
     */
    function check(x) {
        let [cnt, l, r] = [0, 0, n - 1];
        while (l < m && r >= 0) {
            if (nums1[l] + nums2[r] > x) {
                r--;
            } else {
                l++;
                cnt += r + 1;
            }
        }
        return cnt;
    }
    let [left, right] = [nums1[0] + nums2[0], nums1[m - 1] + nums2[n - 1]];
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (check(mid) >= k) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    const res = [];
    for (let [l, r] = [0, n - 1]; l < m; l++) {
        while (r >= 0 && nums1[l] + nums2[r] >= left) {
            r--;
        }
        for (let i = 0; i <= r && k > 0; i++, k--) {
            res.push([nums1[l], nums2[i]]);
        }
    }
    for (let [l, r] = [0, n - 1]; l < m && k > 0; l++) {
        const i = l;
        while (l + 1 < m && nums1[l] == nums1[l + 1]) {
            l++;
        }
        while (r >= 0 && nums1[l] + nums2[r] > left) {
            r--;
        }
        const j = r;
        while (r > 0 && nums2[r] == nums2[r - 1]) {
            r--;
        }
        if (nums1[l] + nums2[r] == left) {
            const cnt = Math.min(k, (l - i + 1) * (j - r + 1));
            for (let c = 0; c < cnt && k > 0; c++, k--) {
                res.push([nums1[l], nums2[r]]);
            }
        }
    }
    return res;
}

module.exports = { kSmallestPairs, kSmallestPairsA, kSmallestPairsB, kSmallestPairsC };

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @abstract
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function rangeSum(nums, n, left, right) {
    throw new Error('skip');
}

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function rangeSumA(nums, n, left, right) {
    var heap = new MinPriorityQueue((a) => a[0]);
    for (let i = 0; i < n; i++) {
        heap.push([nums[i], i]);
    }
    let s = 0;
    for (let j = 1; j <= right; j++) {
        const [x, i] = heap.pop();
        if (j >= left) {
            s += x;
        }
        if (i + 1 < n) {
            heap.push([x + nums[i + 1], i + 1]);
        }
    }
    return s % 1000000007;
}

module.exports = { rangeSum, rangeSumA };

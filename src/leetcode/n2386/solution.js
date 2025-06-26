const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @abstract
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function kSum(nums, k) {
    throw new Error('skip');
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function kSumA(nums, k) {
    const n = nums.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (nums[i] >= 0) {
            sum += nums[i];
        } else {
            nums[i] = -nums[i];
        }
    }
    nums.sort((a, b) => a - b);
    const heap = new MinPriorityQueue((a) => a[0]);
    heap.push([nums[0], 0]);
    let res = 0;
    for (let j = 1; j < k; j++) {
        const [x, i] = heap.pop();
        res = x;
        if (i + 1 < n) {
            heap.push([x + nums[i + 1], i + 1]);
            heap.push([x - nums[i] + nums[i + 1], i + 1]);
        }
    }
    return sum - res;
}

module.exports = { kSum, kSumA };

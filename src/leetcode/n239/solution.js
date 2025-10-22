const { Deque } = require('@datastructures-js/deque');

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function maxSlidingWindow(nums, k) {
    const ans = [];
    const dq = new Deque();
    for (let r = 0; r < nums.length; r++) {
        if (dq.front() < r - k + 1) {
            dq.popFront();
        }
        while (!dq.isEmpty() && nums[r] > nums[dq.back()]) {
            dq.popBack();
        }
        dq.pushBack(r);
        if (r >= k - 1) {
            ans.push(nums[dq.front()]);
        }
    }
    return ans;
}

module.exports = { maxSlidingWindow };

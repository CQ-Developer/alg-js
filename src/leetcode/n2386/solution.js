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

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function kSumB(nums, k) {
    const n = nums.length;

    /**
     * @param {number} x
     * @returns {boolean}
     */
    function check(x) {
        let cnt = 1;

        /**
         * @param {number} i
         * @param {number} s
         */
        function dfs(i, s) {
            if (i == n || s + nums[i] > x || cnt == k) {
                return;
            }
            cnt++;
            dfs(i + 1, s);
            dfs(i + 1, s + nums[i]);
        }

        dfs(0, 0);
        return cnt == k;
    }

    let [l, r, s] = [-1, 0, 0];
    for (let i = 0; i < n; i++) {
        if (nums[i] >= 0) {
            s += nums[i];
        } else {
            nums[i] = -nums[i];
        }
        r += nums[i];
    }
    nums.sort((a, b) => a - b);

    while (l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid)) {
            r = mid;
        } else {
            l = mid;
        }
    }

    return s - r;
}

module.exports = { kSum, kSumA, kSumB };

class Solution {

    constructor() {
        if (new.target === Solution) {
            throw new Error('abstract call');
        }
    }

    /**
     * @abstract
     * @param {number[]} nums
     * @param {number} k
     * @returns {number}
     */
    maximumScore(nums, k) {
        throw new Error('abstract call');
    }

}

class SolutionA extends Solution {

    /**
     * @override
     * @param {number[]} nums
     * @param {number} k
     * @returns {number}
     */
    maximumScore(nums, k) {
        const n = nums.length;
        /** @type {number[]} */
        let stk = [];
        const left = Array.from({ length: n }, () => { return -1; });
        for (let i = 0; i < n; i++) {
            while (stk.length && nums[i] <= nums[stk[stk.length - 1]]) {
                stk.pop();
            }
            if (stk.length) {
                left[i] = stk[stk.length - 1];
            }
            stk.push(i);
        }
        stk = [];
        const right = Array.from({ length: n }, () => { return n; });
        for (let i = n - 1; i > -1; i--) {
            while (stk.length && nums[i] <= nums[stk[stk.length - 1]]) {
                stk.pop();
            }
            if (stk.length) {
                right[i] = stk[stk.length - 1];
            }
            stk.push(i);
        }
        let mx = 0;
        for (let i = 0; i < n; i++) {
            const l = left[i], r = right[i];
            if (l < k && k < r) {
                mx = Math.max(mx, nums[i] * (r - l - 1));
            }
        }
        return mx;
    }

}

class SolutionB extends Solution {

    /**
     * @override
     * @param {number[]} nums
     * @param {number} k
     * @returns {number}
     */
    maximumScore(nums, k) {
        const n = nums.length;
        let mx = nums[k], h = nums[k];
        for (let i = k, j = k, t = 0; t < n - 1; t++) {
            if (j == n - 1 || i > 0 && nums[i - 1] > nums[j + 1]) {
                h = Math.min(h, nums[--i]);
            } else {
                h = Math.min(h, nums[++j]);
            }
            mx = Math.max(mx, h * (j - i + 1));
        }
        return mx;
    }

}

module.exports = { Solution, SolutionA, SolutionB };

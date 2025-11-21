/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function minMaxSubarraySumA(nums, k) {
    const n = nums.length;

    /**
     * @param {number[]} nums
     * @returns {number}
     */
    function contribute(nums) {
        const left = Array.from({ length: n }, () => -1);
        const right = Array.from({ length: n }, () => n);
        const stk = [-1];
        for (let i = 0; i < n; i++) {
            while (stk.length > 1 && nums[stk.at(-1)] >= nums[i]) {
                right[stk.pop()] = i;
            }
            left[i] = stk.at(-1);
            stk.push(i);
        }
        let ans = 0;
        for (let i = 0; i < n; i++) {
            let l = left[i], r = right[i];
            if (r - l - 1 <= k) {
                ans += nums[i] * (i - l) * (r - i);
            } else {
                l = Math.max(l, i - k);
                r = Math.min(r, i + k);
                const a = (r - i) * (i - (r - k));
                const b = Math.trunc((l + k - i + 1 + r - i) * (r - k - l) / 2);
                ans += nums[i] * (a + b);
            }
        }
        return ans;
    }

    return contribute(nums) - contribute(nums.map((v) => -v))
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function minMaxSubarraySumB(nums, k) {
    /**
     * @param {number[]} nums
     * @returns {number}
     */
    function contribute(nums) {
        const n = nums.length;
        let ans = 0;
        const stk = [-1];
        for (let _r = 0; _r <= n; _r++) {
            let r = _r;
            const v = r < n ? nums[r] : -Infinity;
            while (stk.length > 1 && nums[stk.at(-1)] >= v) {
                const i = stk.pop();
                let l = stk.at(-1);
                if (r - l - 1 <= k) {
                    ans += nums[i] * (i - l) * (r - i);
                } else {
                    l = Math.max(l, i - k);
                    r = Math.min(r, i + k);
                    const a = (r - i) * (i - (r - k));
                    const b = Math.trunc((l + k - i + 1 + r - i) * (r - k - l) / 2);
                    ans += nums[i] * (a + b);
                }
            }
            stk.push(_r);
        }
        return ans;
    }
    return contribute(nums) - contribute(nums.map((v) => -v));
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function minMaxSubarraySumC(nums, k) {
    /**
     * @param {number[]} nums
     * @returns {number}
     */
    const contribute = (nums) => {
        /**
         * @param {number} n
         * @returns {number}
         */
        const count = (n) => {
            if (n <= k) {
                return Math.trunc((n + 1) * n / 2);
            }
            return Math.trunc((n + n - k + 1) * k / 2);
        };
        const n = nums.length;
        let stk = [-1];
        let ans = 0;
        for (let r = 0; r < n; r++) {
            while (stk.length > 1 && nums[stk.at(-1)] >= nums[r]) {
                const i = stk.pop();
                const l = stk.at(-1);
                ans += nums[i] * (count(r - l - 1) - count(i - l - 1) - count(r - i - 1));
            }
            stk.push(r);
        }
        return ans;
    };
    return contribute(nums.concat(-Infinity)) - contribute(nums.map((v) => -v).concat(-Infinity));
}

module.exports = { minMaxSubarraySumA, minMaxSubarraySumB, minMaxSubarraySumC };

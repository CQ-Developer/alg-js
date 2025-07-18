/**
 * binary search + dynamic programming
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function minCapabilityA(nums, k) {
    /**
     * @param {number} mx
     * @returns {boolean}
     */
    function check(mx) {
        let [f1, f2] = [0, 0];
        for (const x of nums) {
            if (x > mx) {
                f1 = f2;
            } else {
                [f1, f2] = [f2, Math.max(f2, f1 + 1)];
            }
        }
        return f2 >= k;
    }
    let [l, r] = [0, Math.max(...nums)];
    while (l + 1 < r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            r = m;
        } else {
            l = m;
        }
    }
    return r;
}

/**
 * binary search + greedy
 *
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function minCapabilityB(nums, k) {
    /**
     * @param {number} mx
     * @returns {boolean}
     */
    function check(mx) {
        for (let [i, cnt] = [0, 0]; i < nums.length; i++) {
            if (nums[i] <= mx) {
                if (++cnt >= k) {
                    return true;
                }
                i++;
            }
        }
        return false;
    }
    let [l, r] = [0, Math.max(...nums)];
    while (l + 1 < r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            r = m;
        } else {
            l = m;
        }
    }
    return r;
}

module.exports = { minCapabilityA, minCapabilityB }

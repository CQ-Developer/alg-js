/**
 * @abstract
 * @param {number[]} nums
 * @returns {number}
 */
function medianOfUniquenessArray(nums) {
    throw new Error('skip');
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function medianOfUniquenessArrayA(nums) {
    const n = nums.length;
    const k = Math.floor((n * (n + 1) / 2 + 1) / 2);

    /**
     * @param {number} up
     * @returns {boolean}
     */
    function check(up) {
        let cnt = 0;
        const freq = new Map();
        for (let [l, r] = [0, 0]; r < n; r++) {
            freq.set(nums[r], (freq.get(nums[r]) ?? 0) + 1);
            for (; freq.size > up; l++) {
                let num = freq.get(nums[l]) - 1;
                if (num == 0) {
                    freq.delete(nums[l]);
                } else {
                    freq.set(nums[l], num);
                }
            }
            if ((cnt += r - l + 1) >= k) {
                return true;
            }
        }
        return false;
    }

    let [l, r] = [0, n];
    while (l + 1 < r) {
        const mid = l + (Math.floor((r - l) / 2));
        if (check(mid)) {
            r = mid;
        } else {
            l = mid;
        }
    }
    return r;
}

module.exports = { medianOfUniquenessArray, medianOfUniquenessArrayA };

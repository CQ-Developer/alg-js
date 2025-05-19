/**
 * @param {number[]} nums
 * @param {number} p
 * @returns {number}
 */
function minimizeMax(nums, p) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    /**
     * @param {number} mx
     * @returns {boolean}
     */
    function check(mx) {
        let cnt = 0;
        for (let i = 0; i + 1 < n; i++) {
            if (nums[i + 1] - nums[i] <= mx) {
                i++;
                cnt++;
            }
        }
        return cnt >= p;
    }
    let [l, r] = [0, nums.at(-1) - nums[0]];
    while (l < r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return r;
}

module.exports = minimizeMax;

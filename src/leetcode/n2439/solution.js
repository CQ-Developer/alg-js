/**
 * @param {number[]} nums
 */
function minimizeArrayValueA(nums) {

    /**
     * @param {number} mid
     */
    function check(mid) {
        let rest = 0;
        for (let i = nums.length - 1; i > 0; i--) {
            rest = Math.max(0, nums[i] + rest - mid);
        }
        return nums[0] + rest <= mid;
    }

    let [l, r] = [Math.min(...nums), Math.max(...nums)];
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

/**
 * @param {number[]} nums
 */
function minimizeArrayValueB(nums) {
    let [s, r] = [nums[0], nums[0]];
    for (let i = 1; i < nums.length; i++) {
        s += nums[i];
        r = Math.max(r, Math.ceil(s / (i + 1)));
    }
    return r;
}

module.exports = { minimizeArrayValueA, minimizeArrayValueB }

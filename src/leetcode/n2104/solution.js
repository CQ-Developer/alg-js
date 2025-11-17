/**
 * @param {number[]} nums
 * @returns {number}
 */
function subArrayRangesA(nums) {
    let sum = 0;
    const n = nums.length;
    for (let r = 0; r < n; r++) {
        let min = nums[r], max = nums[r];
        for (let l = r; l >= 0; l--) {
            min = Math.min(min, nums[l]);
            max = Math.max(max, nums[l]);
            sum += max - min;
        }
    }
    return sum;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function subArrayRangesB(nums) {
    const n = nums.length;

    /**
     * @param {number[]} nums
     * @returns {number}
     */
    function sum(nums) {
        const left = Array.from({ length: n }, () => 0);
        const right = Array.from({ length: n }, () => n);
        const stk = [-1];
        for (let i = 0; i < n; i++) {
            while (stk.length > 1 && nums[stk[stk.length - 1]] <= nums[i]) {
                right[stk.pop()] = i;
            }
            left[i] = stk[stk.length - 1];
            stk.push(i);
        }
        let s = 0;
        for (let i = 0; i < n; i++) {
            s += nums[i] * (i - left[i]) * (right[i] - i);
        }
        return s;
    }

    return sum(nums) + sum(nums.map((e) => -e));
}

module.exports = { subArrayRangesA, subArrayRangesB };

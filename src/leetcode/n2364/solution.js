/**
 * @param {number[]} nums
 * @returns {number}
 */
function countBadPairs(nums) {
    const n = nums.length;
    const cnt = new Map();
    let result = Math.trunc(n * (n - 1) / 2);
    for (let i = 0; i < n; i++) {
        const x = nums[i] - i;
        const v = cnt.get(x) ?? 0;
        result -= v;
        cnt.set(x, v + 1);
    }
    return result;
}

module.exports = { countBadPairs };

/**
 * @param {number[]} nums
 * @param {number} m
 * @returns {number}
 */
function maximumProduct(nums, m) {
    let [result, mn, mx] = [-Infinity, Infinity, -Infinity];
    for (let i = m - 1; i < nums.length; i++) {
        mn = Math.min(mn, nums[i - m + 1]);
        mx = Math.max(mx, nums[i - m + 1]);
        result = Math.max(result, mn * nums[i], mx * nums[i]);
    }
    return result;
}

module.exports = {maximumProduct};

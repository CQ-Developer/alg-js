/**
 * @param {number[]} nums
 * @returns {number}
 */
function maxWidthRamp(nums) {
    const n = nums.length;
    const stk = [];
    for (let i = 0; i < n; i++) {
        while (!stk.length || nums[i] < nums[stk[stk.length - 1]]) {
            stk.push(i);
        }
    }
    let mx = 0;
    for (let j = n - 1; j > -1; j--) {
        while (stk.length && nums[j] >= nums[stk[stk.length - 1]]) {
            mx = Math.max(mx, j - stk.pop());
        }
    }
    return mx;
}

module.exports = { maxWidthRamp };

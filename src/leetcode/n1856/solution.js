/**
 * @param {number[]} nums
 * @returns {number}
 */
function maxSumMinProduct(nums) {
    const n = nums.length;
    const pre = Array.from({ length: n + 1 }, () => 0);
    for (let i = 0; i < n; i++) {
        pre[i + 1] = pre[i] + nums[i];
    }
    let mx = 0n;
    const stk = [-1];
    for (let r = 0; r <= n; r++) {
        const x = r < n ? nums[r] : -1;
        while (stk.length > 1 && nums[stk[stk.length - 1]] > x) {
            const i = stk.pop();
            const l = stk[stk.length - 1];
            const cur = BigInt(nums[i]) * BigInt(pre[r] - pre[l + 1]);
            if (cur > mx) {
                mx = cur;
            }
        }
        stk.push(r);
    }
    return Number(mx % 1000000007n);
}

module.exports = { maxSumMinProduct };

export function minimumSum(nums: number[]): number {
    const n = nums.length;
    const suf = Array<number>(n);
    suf[n - 1] = nums[n - 1];
    for (let i = n - 2; i > 1; i--) {
        suf[i] = Math.min(suf[i + 1], nums[i]);
    }
    let ans = Infinity;
    for (let pre = nums[0], i = 1; i < n - 1; i++) {
        if (pre < nums[i] && nums[i] > suf[i + 1]) {
            ans = Math.min(ans, pre + nums[i] + suf[i + 1]);
        }
        pre = Math.min(pre, nums[i]);
    }
    return ans == Infinity ? -1 : ans;
}

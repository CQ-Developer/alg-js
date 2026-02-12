export function isArraySpecialA(nums: number[], queries: number[][]): boolean[] {
    const pre = [0];
    for (let i = 1; i < nums.length; i++) {
        pre[i] = pre[i - 1] + (nums[i - 1] % 2 == nums[i] % 2 ? 1 : 0);
    }
    return queries.map(([f, t]) => pre[f] == pre[t]);
}

export function isArraySpecialB(nums: number[], queries: number[][]): boolean[] {
    const dp = [1];
    for (let i = 1; i < nums.length; i++) {
        dp[i] = nums[i - 1] % 2 == nums[i] % 2 ? 1 : dp[i - 1] + 1;
    }
    return queries.map(([f, t]) => t - f + 1 <= dp[t]);
}

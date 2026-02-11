export function subarraySum(nums: number[]): number {
    let sum = 0;
    const pre = [0];
    for (let i = 0; i < nums.length; i++) {
        pre[i + 1] = pre[i] + nums[i];
        sum += pre[i + 1] - pre[Math.max(0, i - nums[i])];
    }
    return sum;
}

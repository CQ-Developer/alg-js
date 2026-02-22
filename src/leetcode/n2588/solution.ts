export function beautifulSubarrays(nums: number[]): number {
    let pre = 0, ans = 0;
    const cnt = new Map<number, number>();
    for (const x of nums) {
        cnt.set(pre, (cnt.get(pre) ?? 0) + 1);
        pre ^= x;
        ans += cnt.get(pre) ?? 0;
    }
    return ans;
}

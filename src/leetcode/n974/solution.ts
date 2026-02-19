export function subarraysDivByK_1(nums: number[], k: number): number {
    let pre = 0, ans = 0;
    const cnt = new Map<number, number>();
    for (const x of nums) {
        cnt.set(pre, (cnt.get(pre) ?? 0) + 1);
        pre = (pre + x % k + k) % k;
        ans += cnt.get(pre) ?? 0;
    }
    return ans;
}

export function subarraysDivByK_2(nums: number[], k: number): number {
    let pre = 0, ans = 0;
    const cnt = Array.from({ length: k }, () => 0);
    for (const x of nums) {
        cnt[pre]++;
        pre = (pre + x % k + k) % k;
        ans += cnt[pre];
    }
    return ans;
}

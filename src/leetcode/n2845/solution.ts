export function countInterestingSubarraysA(nums: number[], modulo: number, k: number): number {
    const map = new Map([[k % modulo, 1]]);
    let pre = 0, ans = 0;
    nums.forEach((x) => {
        pre += x % modulo == k ? 1 : 0;
        ans += map.get(pre % modulo) ?? 0;
        const y = (pre + k) % modulo;
        map.set(y, (map.get(y) ?? 0) + 1);
    });
    return ans;
}

export function countInterestingSubarraysB(nums: number[], modulo: number, k: number): number {
    const cnt = Array.from({ length: Math.min(nums.length + 1, modulo) }, () => 0);
    cnt[k % modulo] = 1;
    let pre = 0, ans = 0;
    nums.forEach((x) => {
        pre += x % modulo == k ? 1 : 0;
        ans += cnt[pre % modulo];
        cnt[(pre + k) % modulo]++;
    });
    return ans;
}

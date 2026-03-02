export function minSubarrayA(nums: number[], p: number): number {
    const pre = [0];
    nums.forEach((x, i) => {
        pre[i + 1] = pre[i] + x;
    });
    const n = nums.length;
    if (pre[n] % p == 0) {
        return 0;
    }
    let ans = n;
    const map = new Map<number, number>();
    for (let i = 0; i <= n; i++) {
        map.set((pre[i] + pre[n]) % p, i);
        const j = map.get(pre[i] % p) ?? -n;
        ans = Math.min(ans, i - j);
    }
    return ans < n ? ans : -1;
}

export function minSubarrayB(nums: number[], p: number): number {
    const s = nums.reduce((acc, x) => acc + x) % p;
    if (s == 0) {
        return 0;
    }
    const n = nums.length;
    let ans = n, pre = 0;
    const map = new Map([[s, -1]]);
    nums.forEach((x, i) => {
        pre = (pre + x) % p;
        map.set((pre + s) % p, i);
        const j = map.get(pre) ?? -n
        ans = Math.min(ans, i - j);
    });
    return ans < n ? ans : -1;
}

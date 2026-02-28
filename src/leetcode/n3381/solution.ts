export function maxSubarraySumA(nums: number[], k: number): number {
    const map = new Map([[0, 0]]);
    let pre = 0, ans = -Infinity;
    nums.forEach((x, i) => {
        pre += x;
        const j = (i + 1) % k;
        const p = map.get(j) ?? Infinity;
        ans = Math.max(ans, pre - p);
        map.set(j, Math.min(pre, p));
    });
    return ans;
}

export function maxSubarraySumB(nums: number[], k: number): number {
    const p = Array.from({ length: k }, () => Infinity);
    p[k - 1] = 0;
    let pre = 0, ans = -Infinity;
    nums.forEach((x, i) => {
        pre += x;
        const j = i % k;
        ans = Math.max(ans, pre - p[j]);
        p[j] = Math.min(pre, p[j]);
    });
    return ans;
}

export function maxAbsoluteSumA(nums: number[]): number {
    let ans = 0, mx = 0, mn = 0;
    for (const x of nums) {
        mx = Math.max(mx, 0) + x;
        mn = Math.min(mn, 0) + x;
        ans = Math.max(ans, mx, -mn);
    }
    return ans;
}

export function maxAbsoluteSumB(nums: number[]): number {
    let s = 0, a = 0, b = 0;
    for (const x of nums) {
        s += x;
        a = Math.max(a, s);
        b = Math.min(b, s);
    }
    return a - b;
}

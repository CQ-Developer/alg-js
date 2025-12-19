export function findMaxLengthA(nums: number[]): number {
    const n = nums.length;

    const ps = Array.from({ length: n }, () => 0);
    for (let i = 0; i < n; i++) {
        const x = nums[i] ? 1 : -1;
        ps[i + 1] = ps[i] + x;
    }

    let mx = 0;
    const map = new Map<number, number>();
    for (let i = 0; i <= n; i++) {
        if (map.has(ps[i])) {
            mx = Math.max(mx, i - map.get(ps[i])!);
        } else {
            map.set(ps[i], i);
        }
    }

    return mx;
}

export function findMaxLengthB(nums: number[]): number {
    const n = nums.length;
    const map = new Map([[0, -1]]);
    let mx = 0, ps = 0;
    for (let i = 0; i < n; i++) {
        ps += nums[i] ? 1 : -1;
        if (map.has(ps)) {
            mx = Math.max(mx, i - map.get(ps)!);
        } else {
            map.set(ps, i);
        }
    }
    return mx;
}

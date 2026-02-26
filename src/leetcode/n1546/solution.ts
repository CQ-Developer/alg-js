export function maxNonOverlapping(nums: number[], target: number): number {
    let p = 0, mx = 0;
    const set = new Set([0]);
    for (const x of nums) {
        p += x;
        if (set.has(p - target)) {
            mx++;
            set.clear();
        }
        set.add(p);
    }
    return mx;
}

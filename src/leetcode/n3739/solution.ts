export function countMajoritySubarraysA(nums: number[], target: number): number {
    const cnt = new Map([[0, 1]]);
    let ans = 0, s = 0, f = 0;
    nums.forEach((x) => {
        if (target == x) {
            f += cnt.get(s++) ?? 0;
        } else {
            f -= cnt.get(--s) ?? 0;
        }
        ans += f;
        cnt.set(s, (cnt.get(s) ?? 0) + 1);
    });
    return ans;
}

export function countMajoritySubarraysB(nums: number[], target: number): number {
    const n = nums.length;
    const cnt = Array.from({ length: 2 * n + 1 }, () => 0);
    cnt[n] = 1;
    let ans = 0, s = n, f = 0;
    nums.forEach((x) => {
        if (target == x) {
            f += cnt[s++];
        } else {
            f -= cnt[--s];
        }
        ans += f;
        cnt[s]++;
    });
    return ans;
}

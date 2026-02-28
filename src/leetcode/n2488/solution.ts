export function countSubarraysA(nums: number[], k: number): number {
    const cnt = new Map([[0, 1]]);
    let pre = 0, ans = 0, noK = true;
    for (const x of nums) {
        if (x == k) {
            noK = false;
        } else if (x > k) {
            pre++;
        } else {
            pre--;
        }
        if (noK) {
            const a = cnt.get(pre) ?? 0;
            cnt.set(pre, a + 1);
        } else {
            const a = cnt.get(pre) ?? 0;
            const b = cnt.get(pre - 1) ?? 0;
            ans += a + b;
        }
    }
    return ans;
}

export function countSubarraysB(nums: number[], k: number): number {
    const n = nums.length;
    const cnt = Array.from({ length: n * 2 }, () => 0);
    cnt[n] = 1;
    let pre = n, ans = 0, noK = true;
    for (const x of nums) {
        if (x == k) {
            noK = false;
        } else if (x > k) {
            pre++;
        } else {
            pre--;
        }
        if (noK) {
            cnt[pre]++;
        } else {
            ans += cnt[pre] + cnt[pre - 1];
        }
    }
    return ans;
}

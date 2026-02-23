export function findMaxLengthA(nums: number[]): number {
    const n = nums.length;

    const ps = Array.from({ length: n }, () => 0);
    for (let i = 0; i < n; i++) {
        const x = nums[i] * 2 - 1;
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
    let pre = 0, ans = 0;
    const cnt = new Map<number, number>();
    cnt.set(0, -1);
    nums.forEach((x, i) => {
        pre += x * 2 - 1;
        const j = cnt.get(pre);
        if (j != undefined) {
            ans = Math.max(ans, i - j);
        } else {
            cnt.set(pre, i);
        }
    });
    return ans;
}

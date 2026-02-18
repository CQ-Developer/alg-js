export function numSubarraysWithSumA(nums: number[], goal: number): number {
    let pre = 0, ans = 0;
    const cnt = new Map<number, number>();
    for (const x of nums) {
        cnt.set(pre, (cnt.get(pre) ?? 0) + 1);
        pre += x;
        ans += cnt.get(pre - goal) ?? 0;
    }
    return ans;
}


export function numSubarraysWithSumB(nums: number[], goal: number): number {
    let l1 = 0, s1 = 0, l2 = 0, s2 = 0, ans = 0;
    for (let r = 0; r < nums.length; r++) {
        // s1 < goal
        s1 += nums[r];
        for (; l1 <= r && s1 >= goal; l1++) {
            s1 -= nums[l1];
        }
        // s2 <= goal
        s2 += nums[r];
        for (; l2 <= r && s2 > goal; l2++) {
            s2 -= nums[l2];
        }
        ans += l1 - l2;
    }
    return ans;
}

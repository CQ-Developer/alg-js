import _ from "lodash";

export function specialTriplets(nums: number[]): number {
    const suf = _.countBy(nums);
    let ans = 0;
    const pre: Record<number, number> = {};
    for (const x of nums) {
        suf[x]--;
        ans += (pre[x * 2] ?? 0) * (suf[x * 2] ?? 0);
        if (x in pre) {
            pre[x]++;
        } else {
            pre[x] = 1;
        }
    }
    return ans % (10 ** 9 + 7);
}

export function maximumSubarraySum(nums: number[], k: number): number {
    let pre = 0, ans = -Infinity;
    const map = new Map<number, number>();
    for (const x of nums) {
        let s = map.get(x - k);
        if (s != undefined) {
            ans = Math.max(ans, pre + x - s);
        }
        s = map.get(x + k);
        if (s != undefined) {
            ans = Math.max(ans, pre + x - s);
        }
        const y = map.get(x);
        if (y == undefined) {
            map.set(x, pre);
        } else {
            map.set(x, Math.min(pre, y));
        }
        pre += x;
    }
    return ans == -Infinity ? 0 : ans;
}

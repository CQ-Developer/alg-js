export function countStableSubarrays(capacity: number[]): number {
    let pre = capacity[0], ans = 0;
    const cnt = new Map<string, number>();
    for (let r = 1; r < capacity.length; r++) {
        let k = capacity[r] + "_" + pre;
        ans += cnt.get(k) ?? 0;
        k = capacity[r - 1] + "_" + (capacity[r - 1] + pre);
        cnt.set(k, (cnt.get(k) ?? 0) + 1);
        pre += capacity[r];
    }
    return ans;
}

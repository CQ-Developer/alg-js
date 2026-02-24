export function maxBalancedSubarray(nums: number[]): number {
    let ans = 0, xor = 0n, dif = BigInt(nums.length);
    const cnt = new Map<bigint, number>();
    cnt.set(dif, -1);
    nums.forEach((x, i) => {
        xor ^= BigInt(x);
        dif += BigInt((nums[i] & 1) * 2 - 1);
        const k = xor << 32n | dif;
        const j = cnt.get(k);
        if (j == undefined) {
            cnt.set(k, i);
        } else {
            ans = Math.max(ans, i - j);
        }
    });
    return ans;
}

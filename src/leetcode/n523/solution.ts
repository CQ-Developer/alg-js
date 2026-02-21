export function checkSubarraySum(nums: number[], k: number): boolean {
    let p = 0;
    const cnt = new Map<number, number>();
    cnt.set(0, -1);
    for (let i = 0; i < nums.length; i++) {
        p = (p + nums[i]) % k;
        if (cnt.has(p)) {
            if (i - cnt.get(p)! >= 2) {
                return true;
            }
        } else {
            cnt.set(p, i);
        }
    }
    return false;
}

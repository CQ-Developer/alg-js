export function maxSubArrayA(nums: number[]): number {
    let pre = 0, preMin = 0, max = -Infinity;
    nums.forEach((x) => {
        pre += x;
        max = Math.max(max, pre - preMin);
        preMin = Math.min(preMin, pre);
    });
    return max;
}

export function maxSubArrayB(nums: number[]): number {
    const f = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        f[i] = Math.max(f[i - 1], 0) + nums[i];
    }
    return Math.max(...f);
}

export function maxSubArrayC(nums: number[]): number {
    let f = 0, max = -Infinity;
    nums.forEach((x) => {
        f = Math.max(f, 0) + x;
        max = Math.max(max, f);
    });
    return max;
}

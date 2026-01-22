export function countQuadrupletsA(nums: number[]): number {
    const n = nums.length;
    const greater = new Array<number[]>(n);
    greater[n - 1] = Array.from({ length: n + 1 }, () => 0);
    for (let k = n - 2; k > 1; k--) {
        greater[k] = [...greater[k + 1]];
        for (let x = 1; x < nums[k + 1]; x++) {
            greater[k][x]++;
        }
    }
    let ans = 0;
    const less = Array.from({ length: n + 1 }, () => 0);
    for (let j = 1; j < n - 2; j++) {
        for (let x = nums[j - 1] + 1; x <= n; x++) {
            less[x]++;
        }
        for (let k = j + 1; k < n - 1; k++) {
            if (nums[k] < nums[j]) {
                ans += less[nums[k]] * greater[k][nums[j]];
            }
        }
    }
    return ans;
}

export function countQuadrupletsB(nums: number[]): number {
    const n = nums.length;
    const greater = new Array<number[]>(n);
    greater[n - 1] = Array.from({ length: n + 1 }, () => 0);
    for (let k = n - 2; k > 0; k--) {
        greater[k] = [...greater[k + 1]];
        for (let x = 1; x < nums[k + 1]; x++) {
            greater[k][x]++;
        }
    }
    let ans = 0;
    for (let j = 1; j < n - 2; j++) {
        for (let k = j + 1; k < n - 1; k++) {
            if (nums[k] < nums[j]) {
                ans += (nums[k] - n + j + 1 + greater[j][nums[k]]) * greater[k][nums[j]];
            }
        }
    }
    return ans;
}

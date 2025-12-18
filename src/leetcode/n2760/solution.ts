export function longestAlternatingSubarray(nums: number[], threshold: number): number {
    let longest = 0;
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        if (nums[i] <= threshold && (nums[i] & 1) == 0) {
            let j = i;
            while (i + 1 < n && nums[i + 1] <= threshold && (nums[i] & 1) != (nums[i + 1] & 1)) {
                i++;
            }
            longest = Math.max(longest, i - j + 1);
        }
    }
    return longest;
}

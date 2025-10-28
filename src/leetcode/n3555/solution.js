/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number[]}
 */
function minSubarraySort(nums, k) {
    const n = nums.length;
    const ans = Array.from({ length: n - k + 1 }, () => { return 0; });
    for (let i = 0; i < n - k + 1; i++) {
        let l = -1, r = -1;
        let mn = Infinity, mx = -Infinity;
        for (let p = i; p < i + k; p++) {
            if (nums[p] < mx) {
                r = p;
            } else {
                mx = nums[p];
            }
            const q = i + k - 1 - p + i;
            if (nums[q] > mn) {
                l = q;
            } else {
                mn = nums[q];
            }
        }
        if (r > -1) {
            ans[i] = r - l + 1;
        }
    }
    return ans;
}

module.exports = { minSubarraySort };

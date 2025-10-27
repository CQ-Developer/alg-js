/**
 * @param {number[]} nums
 * @returns {number}
 */
function binarySearchableNumbers(nums) {
    const n = nums.length;
    const cnt = Array.from({ length: n }, () => {
        return 1;
    });
    // left < targe < right
    let mx = -Infinity, mn = Infinity;
    for (let i = 0; i < n; i++) {
        if (nums[i] < mx) {
            cnt[i] = 0;
        }
        mx = Math.max(mx, nums[i]);
    }
    let ans = 0;
    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] > mn) {
            cnt[i] = 0;
        }
        mn = Math.min(mn, nums[i]);
        ans += cnt[i];
    }
    return ans;
}

module.exports = { binarySearchableNumbers };

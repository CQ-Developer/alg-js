/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function countSubarrays(nums, k) {
    let ans = 0, l = 0, cnt = 0;
    const x = Math.max(...nums);
    for (const v of nums) {
        if (v == x) {
            cnt++;
        }
        while (cnt >= k) {
            if (nums[l++] == x) {
                cnt--;
            }
        }
        ans += l;
    }
    return ans;
}

module.exports = { countSubarrays };

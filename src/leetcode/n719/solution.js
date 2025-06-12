/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function smallestDistancePair(nums, k) {
    const n = nums.length;
    /**
     * @param {number} x
     * @returns {number}
     */
    function check(x) {
        let cnt = 0;
        for (let [i, j] = [0, 1]; i < n; i++) {
            while (j < n && nums[j] - nums[i] <= x) {
                j++;
            }
            cnt += j - i - 1;
        }
        return cnt;
    }
    nums.sort((a, b) => a - b);
    let [l, r] = [0, nums[n - 1] - nums[0]];
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid) >= k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

module.exports = { smallestDistancePair };

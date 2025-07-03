/**
 * @param {number[]} nums
 * @returns {number}
 */
function findMin(nums) {
    const n = nums.length;
    let [l, r] = [-1, n - 1];
    while (l + 1 < r) {
        const i = l + Math.floor((r - l) / 2);
        if (nums[i] < nums[n - 1]) {
            r = i;
        } else {
            l = i;
        }
    }
    return nums[r];
}

module.exports = { findMin };

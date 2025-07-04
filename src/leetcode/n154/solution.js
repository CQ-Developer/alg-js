/**
 * @param {number[]} nums
 * @returns {number}
 */
function findMin(nums) {
    let [l, r] = [-1, nums.length - 1];
    while (l + 1 < r) {
        const i = l + Math.floor((r - l) / 2);
        if (nums[i] < nums[r]) {
            r = i;
        } else if (nums[i] > nums[r]) {
            l = i;
        } else {
            r--;
        }
    }
    return nums[r];
}

module.exports = { findMin };

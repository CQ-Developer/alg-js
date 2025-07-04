/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function search(nums, target) {
    const n = nums.length;
    let [l, r] = [-1, n];
    while (l + 1 < r) {
        const i = l + Math.floor((r - l) / 2);
        if (nums[i] > target) {
            if (target < nums[0] && nums[i] > nums[n - 1]) {
                l = i;
            } else {
                r = i;
            }
        } else if (nums[i] < target) {
            if (target > nums[n - 1] && nums[i] < nums[0]) {
                r = i;
            } else {
                l = i;
            }
        } else {
            return i;
        }
    }
    return -1;
}

module.exports = { search };

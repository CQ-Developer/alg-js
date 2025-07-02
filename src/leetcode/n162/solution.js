/**
 * @param {number[]} nums 
 * @returns {number}
 */
function findPeakElement(nums) {
    let [l, r] = [-1, nums.length - 1];
    while (l + 1 < r) {
        const i = l + Math.floor((r - l) / 2);
        if (nums[i] > nums[i + 1]) {
            r = i;
        } else {
            l = i;
        }
    }
    return r;
}

module.exports = { findPeakElement };

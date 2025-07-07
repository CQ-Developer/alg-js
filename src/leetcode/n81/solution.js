/**
 * @abstract
 * @param {number[]} nums
 * @param {number} target 
 * @returns {boolean}
 */
function search(nums, target) {
    throw new Error('skip');
}

/**
 * @param {number[]} nums
 * @param {number} target 
 * @returns {boolean}
 */
function searchA(nums, target) {
    let [l, r] = [0, nums.length - 1];
    while (l <= r) {
        const i = l + Math.floor((r - l) / 2);
        if (nums[i] == target) {
            return true;
        }
        if (nums[l] < nums[i]) {
            if (nums[i] > target && nums[l] <= target) {
                r = i - 1;
            } else {
                l = i + 1;
            }
        } else if (nums[l] > nums[i]) {
            if (nums[i] < target && nums[r] >= target) {
                l = i + 1;
            } else {
                r = i - 1;
            }
        } else {
            l++;
        }
    }
    return false;
}

module.exports = { search, searchA };

/**
 * @abstract
 * @param {number[]} nums
 * @returns {number}
 */
function findMaxK(nums) {
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function findMaxKA(nums) {
    let res = -1;
    const caching = new Set();
    for (const num of nums) {
        if (caching.has(-num)) {
            res = Math.max(res, Math.abs(num));
        }
        caching.add(num);
    }
    return res;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function findMaxKB(nums) {
    nums.sort((a, b) => a - b);
    for (let [l, r] = [0, nums.length - 1]; l < r && nums[l] < 0 && nums[r] > 0;) {
        if (-nums[l] < nums[r]) {
            r--;
        } else if (-nums[l] > nums[r]) {
            l++;
        } else {
            return nums[r];
        }
    }
    return -1;
}

module.exports = {findMaxK, findMaxKA, findMaxKB};

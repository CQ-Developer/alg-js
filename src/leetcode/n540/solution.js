/**
 * @abstract
 * @param {number[]} nums
 * @returns {number}
 */
function singleNonDuplicate(nums) {
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function singleNonDuplicateA(nums) {
    let result = 0;
    for (const num of nums) {
        result ^= num;
    }
    return result;
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function singleNonDuplicateB(nums) {
    let [l, r] = [-1, Math.floor(nums.length / 2)];
    while (l + 1 < r) {
        const i = l + Math.floor((r - l) / 2);
        if (nums[2 * i] != nums[2 * i + 1]) {
            r = i;
        } else {
            l = i;
        }
    }
    return nums[2 * r];
}

module.exports = { singleNonDuplicate, singleNonDuplicateA, singleNonDuplicateB };

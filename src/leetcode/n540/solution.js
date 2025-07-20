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

module.exports = { singleNonDuplicate, singleNonDuplicateA };

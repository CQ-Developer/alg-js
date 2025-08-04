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

module.exports = {findMaxK, findMaxKA};

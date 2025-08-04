/**
 * @abstract
 * @param {number[]} nums
 * @returns {number}
 */
function numIdenticalPairs(nums) {
}

/**
 * @param {number[]} nums
 * @returns {number}
 */
function numIdenticalPairsA(nums) {
    let result = 0;
    const caching = new Map();
    for (const x of nums) {
        const p = caching.get(x) ?? 0;
        result += p;
        caching.set(x, p + 1);
    }
    return result;
}


module.exports = { numIdenticalPairsA };

/**
 * @abstract
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSum(nums, target) {
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */
function twoSumA(nums, target) {
    const cache = new Map();
    for (let i = 0; i < nums.length; i++) {
        const [a, b] = [nums[i], target - nums[i]];
        if (cache.has(b)) {
            return [cache.get(b), i];
        }
        cache.set(a, i);
    }
    return [];
}

module.exports = { twoSum, twoSumA };

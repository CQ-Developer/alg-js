/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
function containsNearbyDuplicateA(nums, k) {
    const latest = new Map();
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (latest.has(x) && i - latest.get(x) <= k) {
            return true;
        }
        latest.set(x, i);
    }
    return false;
}

module.exports = {containsNearbyDuplicateA};

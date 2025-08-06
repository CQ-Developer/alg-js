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

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {boolean}
 */
function containsNearbyDuplicateB(nums, k) {
    const w = new Set();
    for (let i = 0; i < nums.length; i++) {
        const x = nums[i];
        if (w.has(x)) {
            return true;
        }
        w.add(x);
        if (i >= k) {
            w.delete(nums[i - k]);
        }
    }
    return false;
}

module.exports = {containsNearbyDuplicateA, containsNearbyDuplicateB};

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function maxOperations(nums, k) {
    let result = 0;
    const tab = new Map();
    for (const num of nums) {
        const x = tab.get(k - num) ?? 0;
        if (x > 0) {
            result++;
            if (x == 1) {
                tab.delete(k - num);
            } else {
                tab.set(k - num, x - 1);
            }
        } else {
            tab.set(num, 1 + (tab.get(num) ?? 0))
        }
    }
    return result;
}

module.exports = {maxOperations};

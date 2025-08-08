/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[][]}
 */
function pairSums(nums, target) {
    let result = [];
    const tab = new Map();
    for (const num of nums) {
        const x = target - num;
        const cnt = tab.get(x) ?? 0;
        if (cnt) {
            result.push([x, num]);
            tab.set(x, cnt - 1);
        } else {
            tab.set(num, (tab.get(num) ?? 0) + 1);
        }
    }
    return result;
}

module.exports = {pairSums};

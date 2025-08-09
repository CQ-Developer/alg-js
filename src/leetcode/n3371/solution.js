/**
 * @param {number[]} nums
 * @returns {number}
 */
function getLargestOutlier(nums) {
    let sum = 0;
    const cnt = new Map();
    for (const x of nums) {
        sum += x;
        cnt.set(x, (cnt.get(x) ?? 0) + 1);
    }
    let res = -Infinity;
    for (const x of nums) {
        if ((sum - x) % 2 == 0) {
            const y = (sum - x) / 2;
            if (cnt.has(y) && (y != x || cnt.get(y) > 1)) {
                res = Math.max(res, x);
            }
        }
    }
    return res;
}

module.exports = { getLargestOutlier };

/**
 * @param {number[]} nums
 * @returns {number}
 */
function maximumDifference(nums) {
    let [min, res] = [nums[0], 0];
    for (const x of nums) {
        if (x < min) {
            min = x;
        } else {
            res = Math.max(res, x - min);
        }
    }
    return res == 0 ? -1 : res;
}

module.exports = {maximumDifference};

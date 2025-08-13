/**
 * 前后缀
 * @param {number[]} nums
 * @returns {number}
 */
function maximumTripleValueA(nums) {
    const n = nums.length;
    const rMax = Array(n + 1).fill(0);
    for (let i = n - 1; i > 1; i--) {
        rMax[i] = Math.max(rMax[i + 1], nums[i]);
    }
    let [result, lMax] = [0, nums[0]];
    for (let j = 1; j < n - 1; j++) {
        result = Math.max(result, (lMax - nums[j]) * rMax[j + 1]);
        lMax = Math.max(lMax, nums[j]);
    }
    return result;
}

/**
 * 动态规划
 * @param {number[]} nums
 * @returns {number}
 */
function maximumTripleValueB(nums) {
    let [res, pre, dif] = [0, 0, 0];
    for (const x of nums) {
        res = Math.max(res, dif * x);
        dif = Math.max(dif, pre - x);
        pre = Math.max(pre, x);
    }
    return res;
}

module.exports = {maximumTripleValueA, maximumTripleValueB};

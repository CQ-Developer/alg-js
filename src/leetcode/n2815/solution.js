/**
 * @param {number[]} nums
 * @returns {number}
 */
function maxSum(nums) {
    const ht = Array(10).fill(-Infinity);
    let res = -1;
    for (const num of nums) {
        let i = 0;
        for (let x = num; x > 0; x = Math.floor(x / 10)) {
            i = Math.max(i, x % 10);
        }
        res = Math.max(res, ht[i] + num);
        ht[i] = Math.max(ht[i], num);
    }
    return res;
}

module.exports = { maxSum };

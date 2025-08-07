/**
 * @param {number[]} nums
 * @returns {number}
 */
function maximumSum(nums) {
    let res = -1;
    const tab = Array(90).fill(-Infinity);
    for (const num of nums) {
        let i = 0;
        for (let x = num; x > 0; x = Math.trunc(x / 10)) {
            i += x % 10;
        }
        res = Math.max(res, num + tab[i]);
        tab[i] = Math.max(tab[i], num);
    }
    return res;
}

module.exports = {maximumSum};

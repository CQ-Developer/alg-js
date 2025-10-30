/**
 * @param {number[]} nums
 * @returns {number}
 */
function minOperations(nums) {
    let ops = 0, k = -1;
    for (const x of nums) {
        while (k > -1 && x < nums[k]) {
            k--;
            ops++;
        }
        if (k == -1 || x != nums[k]) {
            nums[++k] = x;
        }
    }
    return ops + k + (nums[0] == 0 ? 0 : 1);
}

module.exports = { minOperations };

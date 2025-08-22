/**
 * @param {string[]} operations
 * @returns {number}
 */
function calPoints(operations) {
    let i = 0;
    const nums = Array(operations.length).fill(0);
    for (const s of operations) {
        if (s == 'C') {
            nums[i - 1] = 0;
            i--;
        } else if (s == 'D') {
            nums[i] = nums[i - 1] * 2;
            i++;
        } else if (s == '+') {
            nums[i] = nums[i - 1] + nums[i - 2];
            i++;
        } else {
            nums[i] = parseInt(s);
            i++;
        }
    }
    let sum = 0;
    for (const x of nums) {
        sum += x;
    }
    return sum;
}

module.exports = { calPoints };

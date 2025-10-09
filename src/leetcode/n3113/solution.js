/**
 * @param {number[]} nums
 * @returns {number}
 */
function numberOfSubarrays(nums) {
    let result = nums.length;
    const stack = [[Infinity, 0]];
    for (const num of nums) {
        while (num > stack[stack.length - 1][0]) {
            stack.pop();
        }
        if (num == stack[stack.length - 1][0]) {
            result += stack[stack.length - 1][1]++;
        } else {
            stack.push([num, 1]);
        }
    }
    return result;
}

module.exports = { numberOfSubarrays };

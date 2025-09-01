/**
 * @param {number[]} nums
 * @returns {boolean}
 */
function find132pattern(nums) {
    const n = nums.length;
    const stack = [nums[n - 1]];
    let k = -Infinity
    for (let i = n - 2; i >= 0; i--) {
        if (nums[i] < k) {
            return true;
        }
        while (stack.length && nums[i] > stack[stack.length - 1]) {
            k = stack.pop();
        }
        if (nums[i] > k) {
            stack.push(nums[i]);
        }
    }
    return false;
}

module.exports = { find132pattern };

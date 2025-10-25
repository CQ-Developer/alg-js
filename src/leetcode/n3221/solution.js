/**
 * @param {number[]} nums
 * @returns {number}
 */
function maxScore(nums) {
    const n = nums.length;
    const stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[i] >= nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        stack.push(i);
    }
    let i = 0, ans = 0;
    for (const j of stack) {
        ans += (j - i) * nums[j];
        i = j;
    }
    return ans;
}

module.exports = { maxScore };

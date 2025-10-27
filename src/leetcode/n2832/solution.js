/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function maximumLengthOfRangesA(nums) {
    const n = nums.length;
    const ans = Array.from({ length: n }, () => { return -1; });
    let stack = [];
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length) {
            ans[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    stack = [];
    for (let i = n - 1; i > -1; i--) {
        while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
            stack.pop();
        }
        ans[i] = (stack.length ? stack[stack.length - 1] - ans[i] : n - ans[i]) - 1;
        stack.push(i);
    }
    return ans;
}

module.exports = { maximumLengthOfRangesA };

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @returns {number}
 */
function validSubarraySize(nums, threshold) {
    const n = nums.length;

    let stack = [];
    const left = Array.from({ length: n }, () => -1);
    for (let i = 0; i < n; i++) {
        while (stack.length && nums[stack.at(-1)] >= nums[i]) {
            stack.pop();
        }
        if (stack.length) {
            left[i] = stack.at(-1);
        }
        stack.push(i);
    }

    stack = [];
    const right = Array.from({ length: n }, () => n);
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && nums[stack.at(-1)] >= nums[i]) {
            stack.pop();
        }
        if (stack.length) {
            right[i] = stack.at(-1);
        }
        stack.push(i);
    }

    for (let i = 0; i < n; i++) {
        const k = right[i] - left[i] - 1;
        if (nums[i] > Math.trunc(threshold / k)) {
            return k;
        }
    }
    return -1;
}

module.exports = { validSubarraySize };

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function nextGreaterElementsA(nums) {
    const n = nums.length;
    const result = Array(n);
    const stack = [-1];
    for (let i = n * 2 - 1; i >= 0; i--) {
        const x = nums[i % n];
        while (stack.length > 1 && x >= stack.at(-1)) {
            stack.pop();
        }
        result[i % n] = stack.at(-1);
        stack.push(x);
    }
    return result;
}

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function nextGreaterElementsB(nums) {
    const n = nums.length;
    const res = Array(n).fill(-1);
    const stk = [];
    for (let i = 0; i < n * 2; i++) {
        const x = nums[i % n];
        while (stk.length && x > nums[stk.at(-1)]) {
            res[stk.pop()] = x;
        }
        if (i < n) {
            stk.push(i);
        }
    }
    return res;
}

module.exports = { nextGreaterElementsA, nextGreaterElementsB };

/**
 * 单调栈(从左往右)
 * @param {number} nums
 * @returns {number}
 */
function totalStepsA(nums) {
    let step = 0;
    const stack = [];
    for (const x of nums) {
        let mx = 0;
        while (stack.length && x >= stack[stack.length - 1][0]) {
            mx = Math.max(mx, stack.pop()[1]);
        }
        if (stack.length) {
            mx++;
        }
        step = Math.max(step, mx);
        stack.push([x, mx]);
    }
    return step;
}

/**
 * 单调栈(从右往左)
 * @param {number} nums
 * @returns {number}
 */
function totalStepsB(nums) {
    const n = nums.length;
    const a = Array.from({ length: n }, () => 0);
    const s = [];
    for (let i = n - 1; i > -1; i--) {
        while (s.length && nums[i] > nums[s[s.length - 1]]) {
            a[i] = Math.max(a[s.pop()], a[i] + 1);
        }
        s.push(i);
    }
    return Math.max(...a);
}

module.exports = { totalStepsA, totalStepsB };

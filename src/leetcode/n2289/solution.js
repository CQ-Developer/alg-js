/**
 * @param {number} nums
 * @returns {number}
 */
function totalSteps(nums) {
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

module.exports = { totalSteps };

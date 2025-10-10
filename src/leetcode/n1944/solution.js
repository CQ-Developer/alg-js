/**
 * @param {number[]} heights 
 * @returns {number[]}
 */
function canSeePersonsCount(heights) {
    const n = heights.length;
    const arr = Array(n).fill(0);
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length && heights[i] > stack[stack.length - 1]) {
            stack.pop();
            arr[i]++;
        }
        if (stack.length) {
            arr[i]++;
        }
        stack.push(heights[i]);
    }
    return arr;
}

module.exports = { canSeePersonsCount };

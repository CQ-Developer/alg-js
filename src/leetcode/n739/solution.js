/**
 * @param {number[]} temperatures
 * @returns {number[]}
 */
function dailyTemperatures(temperatures) {
    const n = temperatures.length;
    const result = Array(n).fill(0);
    const stack = [];
    for (let i = n - 1; i >= 0; i--) {
        const x = temperatures[i];
        while (stack.length > 0 && x >= temperatures[stack[stack.length - 1]]) {
            stack.pop();
        }
        if (stack.length > 0) {
            result[i] = stack[stack.length - 1] - i;
        }
        stack.push(i);
    }
    return result;
}

module.exports = { dailyTemperatures };

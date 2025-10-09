/**
 * @param {number[]} a
 * @returns {number}
 */
function maximumSumOfHeights(a) {
    let s = 0;
    const n = a.length;

    const suf = Array(n + 1).fill(0);
    let stack = [n];
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 1 && a[i] <= a[stack[stack.length - 1]]) {
            const j = stack.pop();
            s -= a[j] * (stack[stack.length - 1] - j);
        }
        s += a[i] * (stack[stack.length - 1] - i);
        suf[i] = s;
        stack.push(i);
    }

    stack = [-1];
    let pre = 0;
    for (let i = 0; i < n; i++) {
        while (stack.length > 1 && a[i] <= a[stack[stack.length - 1]]) {
            const j = stack.pop();
            pre -= a[j] * (j - stack[stack.length - 1]);
        }
        pre += a[i] * (i - stack[stack.length - 1]);
        s = Math.max(s, pre + suf[i + 1]);
        stack.push(i);
    }

    return s;
}

module.exports = { maximumSumOfHeights };

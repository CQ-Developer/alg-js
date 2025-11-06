/**
 * @param {number[]} height
 * @returns {number}
 */
function trapA(height) {
    const n = height.length;
    const suf = Array(n);
    suf[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        suf[i] = Math.max(suf[i + 1], height[i]);
    }
    let ans = 0, pre = height[0];
    for (let i = 1; i < n; i++) {
        pre = Math.max(pre, height[i]);
        ans += Math.min(pre, suf[i]) - height[i];
    }
    return ans;
}

/**
 * @param {number[]} height
 * @returns {number}
 */
function trapB(height) {
    let ans = 0;
    let l = 0, r = height.length - 1;
    let pre = 0, suf = 0;
    while (l < r) {
        pre = Math.max(pre, height[l]);
        suf = Math.max(suf, height[r]);
        if (pre < suf) {
            ans += pre - height[l++];
        } else {
            ans += suf - height[r--];
        }
    }
    return ans;
}

/**
 * @param {number[]} height
 * @returns {number}
 */
function trapC(height) {
    let ans = 0;
    const stk = [];
    for (let r = 0; r < height.length; r++) {
        while (stk.length && height[stk[stk.length - 1]] <= height[r]) {
            const low = height[stk.pop()];
            if (!stk.length) {
                break;
            }
            const l = stk[stk.length - 1];
            const h = Math.min(height[l], height[r]) - low;
            ans += h * (r - l - 1);
        }
        stk.push(r);
    }
    return ans;
}

module.exports = { trapA, trapB, trapC };

/**
 * @param {number[][]} mat
 * @returns {number}
 */
function numSubmatA(mat) {
    let ans = 0;
    const n = mat[0].length;
    const height = Array.from({ length: n }, () => { return 0; });
    for (const row of mat) {
        for (let j = 0; j < n; j++) {
            if (row[j]) {
                height[j]++;
            } else {
                height[j] = 0;
            }
        }
        const stk = [[-1, 0, -1]];
        for (let r = 0; r < n; r++) {
            const h = height[r];
            while (stk.length && stk[stk.length - 1][2] >= h) {
                stk.pop();
            }
            let [l, cnt, _] = stk[stk.length - 1];
            cnt += h * (r - l);
            ans += cnt;
            stk.push([r, cnt, h])
        }
    }
    return ans;
}

/**
 * @param {number[][]} mat
 * @returns {number}
 */
function numSubmatB(mat) {
    let ans = 0;
    const m = mat.length, n = mat[0].length;
    for (let top = 0; top < m; top++) {
        const a = Array.from({ length: n }, () => { return 0; });
        for (let i = top; i < m; i++) {
            const h = i - top + 1;
            for (let p = -1, j = 0; j < n; j++) {
                a[j] += mat[i][j];
                if (a[j] == h) {
                    ans += j - p;
                } else {
                    p = j;
                }
            }
        }
    }
    return ans;
}

module.exports = { numSubmatA, numSubmatB };

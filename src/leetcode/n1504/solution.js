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

module.exports = { numSubmatA };

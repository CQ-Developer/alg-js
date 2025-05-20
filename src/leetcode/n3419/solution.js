/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} threshold
 * @returns {number}
 */
function minMaxWeightA(n, edges, threshold) {
    if (edges.length < n - 1) {
        return -1;
    }
    let mx = 0;
    /** @type {number[]} */
    const vis = new Array(n);
    /** @type {number[][][]} */
    const g = Array.from({ length: n }, () => []);
    for (const [x, y, w] of edges) {
        g[y].push([x, w]);
        mx = Math.max(mx, w);
    }

    /**
     * @param {number} x
     * @param {number} up
     * @returns {number}
     */
    function check(x, up) {
        vis[x] = up;
        let res = 1;
        for (const [y, w] of g[x]) {
            if (w <= up && vis[y] != up) {
                res += check(y, up);
            }
        }
        return res;
    }

    let [l, r] = [1, mx + 1];
    while (l < r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(0, m) == n) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return r > mx ? -1 : r;
}

module.exports = { minMaxWeightA };

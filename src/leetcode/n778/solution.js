/**
 * @param {number[][]} grid
 * @returns {number}
 */
function swimInWaterA(grid) {
    const [m, n] = [grid.length, grid[0].length];

    /**
     * @param {boolean[][]} vis
     * @param {number} i
     * @param {number} j
     * @param {number} mx
     * @returns {boolean}
     */
    function check(vis, i, j, mx) {
        if (i == m - 1 && j == n - 1) {
            return true;
        }
        vis[i][j] = true;
        if (i > 0 && !vis[i - 1][j] && grid[i - 1][j] <= mx && check(vis, i - 1, j, mx)) {
            return true;
        }
        if (i + 1 < m && !vis[i + 1][j] && grid[i + 1][j] <= mx && check(vis, i + 1, j, mx)) {
            return true;
        }
        if (j > 0 && !vis[i][j - 1] && grid[i][j - 1] <= mx && check(vis, i, j - 1, mx)) {
            return true;
        }
        if (j + 1 < n && !vis[i][j + 1] && grid[i][j + 1] <= mx && check(vis, i, j + 1, mx)) {
            return true;
        }
        return false;
    }

    let [l, r] = [grid[0][0], Math.max(...[].concat(...grid))];
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(Array.from({ length: m }, () => Array.from({ length: n }, () => false)), 0, 0, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return r;
}

module.exports = { swimInWaterA }

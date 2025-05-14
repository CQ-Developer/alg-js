/**
 * @param {number[][]} heights
 * @returns {number}
 */
function minimumEffortPath(heights) {
    const m = heights.length, n = heights[0].length;
    const vi = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));

    /**
     * @param {number} v
     * @param {number} i
     * @param {number} j
     * @param {number} mx
     * @returns {boolean}
     */
    function dfs(v, i, j, mx) {
        if (i == m - 1 && j == n - 1) {
            return true;
        }
        vi[i][j] = v;
        if (i + 1 < m && vi[i + 1][j] != v && Math.abs(heights[i][j] - heights[i + 1][j]) <= mx && dfs(v, i + 1, j, mx)) {
            return true;
        }
        if (i >= 1 && vi[i - 1][j] != v && Math.abs(heights[i][j] - heights[i - 1][j]) <= mx && dfs(v, i - 1, j, mx)) {
            return true;
        }
        if (j + 1 < n && vi[i][j + 1] != v && Math.abs(heights[i][j] - heights[i][j + 1]) <= mx && dfs(v, i, j + 1, mx)) {
            return true;
        }
        if (j >= 1 && vi[i][j - 1] != v && Math.abs(heights[i][j] - heights[i][j - 1]) <= mx && dfs(v, i, j - 1, mx)) {
            return true;
        }
        return false;
    }


    let l = 0, r = 1e6, t = 0;;
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (dfs(++t, 0, 0, mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return r;
}

module.exports = minimumEffortPath;

const { PriorityQueue } = require('@datastructures-js/priority-queue');

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

/**
 * @param {number[][]} grid
 */
function swimInWaterB(grid) {
    const [m, n] = [grid.length, grid[0].length];

    /**
     * @param {number} mx
     */
    function check(mx) {
        const vis = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
        vis[0][0] = true;
        const que = [[0, 0]];
        while (que.length > 0) {
            const [i, j] = que.shift();
            for (const [a, b] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                const [x, y] = [i + a, j + b];
                if (x >= 0 && x < m && y >= 0 && y < n && !vis[x][y] && grid[x][y] <= mx) {
                    que.push([x, y]);
                    vis[x][y] = true;
                }
            }
        }
        return vis[m - 1][n - 1];
    }

    let [l, r] = [grid[0][0], Math.max(...[].concat(...grid))];
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return r;
}

/**
 * @param {number[][]} grid
 * @returns {number}
 */
function swimInWaterC(grid) {
    let ans = 0;
    const [m, n] = [grid.length, grid[0].length];
    const heap = new PriorityQueue((a, b) => a[0] - b[0]);
    heap.push([grid[0][0], 0, 0]);
    const vist = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
    vist[0][0] = true;
    while (!heap.isEmpty()) {
        const [g, i, j] = heap.pop();
        ans = Math.max(ans, g);
        if (i == m - 1 && j == n - 1) {
            break;
        }
        for (const [x, y] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
            if (x >= 0 && x < m && y >= 0 && y < n && !vist[x][y]) {
                heap.push([grid[x][y], x, y]);
                vist[x][y] = true;
            }
        }
    }
    return ans;
}

module.exports = { swimInWaterA, swimInWaterB, swimInWaterC };

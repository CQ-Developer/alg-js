const { Queue } = require('@datastructures-js/queue');
/**
 * @param {number[][]} grid
 */
function maximumSafenessFactor(grid) {
    throw new Error('skip');
}

/**
 * @param {number[][]} grid
 * @returns {number}
 */
function maximumSafenessFactorA(grid) {
    const n = grid.length;
    /**
     * @param {number} m
     */
    function check(m) {
        const vis = Array.from({ length: n }, () => Array.from({ length: n }, () => false));
        vis[0][0] = true;
        const que = new Queue([[0, 0]]);
        while (!que.isEmpty()) {
            const [i, j] = que.dequeue();
            for (const [x, y] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
                if (x >= 0 && x < n && y >= 0 && y < n && !vis[x][y] && dis[x][y] >= m) {
                    que.enqueue([x, y]);
                    vis[x][y] = true;
                }
            }
        }
        return vis.at(-1).at(-1);
    }
    const dis = Array.from({ length: n }, () => Array.from({ length: n }, () => -1));
    const que = new Queue();
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                que.enqueue([i, j]);
                dis[i][j] = 0;
            }
        }
    }
    while (!que.isEmpty()) {
        const [i, j] = que.dequeue();
        for (const [x, y] of [[i + 1, j], [i - 1, j], [i, j + 1], [i, j - 1]]) {
            if (x >= 0 && x < n && y >= 0 && y < n && dis[x][y] == -1) {
                que.enqueue([x, y]);
                dis[x][y] = dis[i][j] + 1;
            }
        }
    }
    let [l, r] = [0, Math.min(dis[0][0], dis.at(-1).at(-1))];
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return r;
}

module.exports = { maximumSafenessFactor, maximumSafenessFactorA };

/**
 * binary search
 * deep first search
 * @param {number[][]} heights
 * @returns {number}
 */
function minimumEffortPathA(heights) {
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

    let l = 0, r = 1e6, t = 0;
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

/**
 * binary search
 * breadth first search
 * @param {number[][]} heights
 * @returns {number}
 */
function minimumEffortPathB(heights) {
    const m = heights.length, n = heights[0].length, v = m * n - 1;
    let l = 0, r = 1e6;
    while (l < r) {
        const mid = l + Math.floor((r - l) / 2);
        const que = [[0, 0]];
        const vis = new Set([0]);
        while (que.length) {
            const [i, j] = que.shift();
            for (const [a, b] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                const x = i + a, y = j + b;
                if (x >= 0 && x < m && y >= 0 && y < n && !vis.has(x * n + y) && Math.abs(heights[i][j] - heights[x][y]) <= mid) {
                    que.push([x, y]);
                    vis.add(x * n + y);
                }
            }
        }
        if (vis.has(v)) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return r;
}

/**
 * dijkstra
 * @param {number[][]} heights
 */
function minimumEffortPathC(heights) {

    class Heap {

        /**
         * @type {number[][]}
         */
        #heap = [null];

        /**
         * @param {number[]} val
         */
        push(val) {
            this.#heap.push(val);
            this.#float(this.#heap.length - 1);
        }

        /**
         * @param {number} i
         */
        #float(i) {
            while (i > 1) {
                const j = Math.floor(i / 2);
                if (this.#heap[i][2] >= this.#heap[j][2]) {
                    break;
                }
                [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
                i = j;
            }
        }

        /**
         * @returns {number[]}
         */
        pop() {
            if (this.#heap.length == 1) {
                throw new Error("heap is empty");
            }
            if (this.#heap.length == 2) {
                return this.#heap.pop();
            }
            const val = this.#heap[1];
            this.#heap[1] = this.#heap.pop();
            this.#sink(1);
            return val;
        }

        /**
         * @param {number} i
         */
        #sink(i) {
            while (i * 2 < this.#heap.length) {
                const [l, r] = [i * 2, i * 2 + 1];
                let j = i;
                if (this.#heap[j][2] > this.#heap[l][2]) {
                    j = l;
                }
                if (r < this.#heap.length && this.#heap[j][2] > this.#heap[r][2]) {
                    j = r;
                }
                if (i == j) {
                    break;
                }
                [this.#heap[i], this.#heap[j]] = [this.#heap[j], this.#heap[i]];
                i = j;
            }
        }

        /**
         * @returns {boolean}
         */
        isEmpty() {
            return this.#heap.length == 1;
        }

    }

    const [m, n] = [heights.length, heights[0].length];
    const visited = Array.from({ length: m }, () => Array.from({ length: n }, () => false));
    const efforts = Array.from({ length: m }, () => Array.from({ length: n }, () => Infinity));
    efforts[0][0] = 0;
    const heap = new Heap();
    heap.push([0, 0, 0]);
    while (!heap.isEmpty()) {
        const [i, j, _] = heap.pop();
        if (!visited[i][j]) {
            visited[i][j] = true;
            for (const [a, b] of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
                const [x, y] = [i + a, j + b];
                if (x >= 0 && x < m && y >= 0 && y < n) {
                    efforts[x][y] = Math.min(efforts[x][y], Math.max(efforts[i][j], Math.abs(heights[i][j] - heights[x][y])));
                    heap.push([x, y, efforts[x][y]]);
                }
            }
        }
    }
    return efforts[m - 1][n - 1];
}

module.exports = { minimumEffortPathA, minimumEffortPathB, minimumEffortPathC };

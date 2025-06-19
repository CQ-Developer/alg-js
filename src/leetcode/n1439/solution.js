const { MinPriorityQueue } = require("@datastructures-js/priority-queue");

/**
 * @abstract
 * @param {number[][]} mat
 * @param {number} k
 * @returns {number}
 */
function kthSmallest(mat, k) {
    throw new Error('skip');
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @returns {number}
 */
function kthSmallestA(mat, k) {
    let res = mat[0].slice(0, k);
    for (const row of mat.slice(1)) {
        let cur = [];
        for (const x of res) {
            for (const y of row) {
                cur.push(x + y);
            }
        }
        res = cur.sort((a, b) => a - b).slice(0, k);
    }
    return res.at(-1);
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @returns {number}
 */
function kthSmallestB(mat, k) {
    /**
     * @param {number} i
     * @param {number} rest
     * @returns {number}
     */
    function check(i, rest) {
        if (i == mat.length) {
            return 1;
        }
        let ans = 0;
        for (const x of mat[i]) {
            if (x - mat[i][0] > rest || ans >= k) {
                break;
            }
            ans += check(i + 1, rest - x + mat[i][0]);
        }
        return ans;
    }
    let [l, r] = [0, 0];
    for (const row of mat) {
        l += row.at(0);
        r += row.at(-1);
    }
    const base = l;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(0, mid - base) >= k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @returns {number}
 */
function kthSmallestC(mat, k) {
    /**
     * @param {number[]} a
     * @param {number[]} b
     * @returns {number[]}
     */
    function kthSmallestPairs(a, b) {
        const heap = new MinPriorityQueue((arr) => arr[0]);
        heap.enqueue([a[0] + b[0], 0, 0]);
        const ans = [];
        while (!heap.isEmpty() && ans.length < k) {
            const [_, i, j] = heap.dequeue();
            ans.push(a[i] + b[j]);
            if (j == 0 && i + 1 < a.length) {
                heap.enqueue([a[i + 1] + b[0], i + 1, 0]);
            }
            if (j + 1 < b.length) {
                heap.enqueue([a[i] + b[j + 1], i, j + 1]);
            }
        }
        return ans;
    }
    let ans = mat[0].slice(0, k);
    for (const row of mat.slice(1)) {
        ans = kthSmallestPairs(ans, row);
    }
    return ans.at(-1);
}

module.exports = { kthSmallest, kthSmallestA, kthSmallestB, kthSmallestC };

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @abstract
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */
function kthSmallest(matrix, k) {
    throw new Error('skip');
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */
function kthSmallestA(matrix, k) {
    const arr = [].concat(...matrix);
    arr.sort((a, b) => a - b);
    return arr[k - 1];
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */
function kthSmallestB(matrix, k) {
    const heap = new MinPriorityQueue(a => a[2]);
    const n = matrix.length
    for (let i = 0; i < n; i++) {
        heap.enqueue([i, 0, matrix[i][0]]);
    }
    for (let _ = 0; _ < k - 1; _++) {
        const [i, j] = heap.dequeue();
        if (j + 1 < n) {
            heap.enqueue([i, j + 1, matrix[i][j + 1]]);
        }
    }
    return heap.dequeue()[2];
}

/**
 * @param {number[][]} matrix
 * @param {number} k
 * @returns {number}
 */
function kthSmallestC(matrix, k) {
    const n = matrix.length;

    /**
     * @param {number} top
     * @returns {boolean}
     */
    function check(top) {
        let cnt = 0;
        for (let [i, j] = [n - 1, 0]; i >= 0 && j < n;) {
            if (matrix[i][j] <= top) {
                cnt += i + 1;
                j++;
            } else {
                i--;
            }
        }
        return cnt >= k;
    }

    let [l, r] = [matrix[0][0], matrix[n - 1][n - 1]];
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid)) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

module.exports = { kthSmallest, kthSmallestA, kthSmallestB, kthSmallestC };

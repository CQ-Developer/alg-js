const { PriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @abstract
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
function kthSmallestPrimeFraction(arr, k) {
    throw new Error('skip');
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
function kthSmallestPrimeFractionA(arr, k) {
    const heap = new PriorityQueue((a, b) => arr[a[0]] * arr[b[1]] - arr[b[0]] * arr[a[1]]);
    for (let j = 1; j < arr.length; j++) {
        heap.enqueue([0, j]);
    }
    for (let _ = 1; _ < k; _++) {
        const [i, j] = heap.dequeue();
        if (i + 1 < j) {
            heap.enqueue([i + 1, j]);
        }
    }
    const [i, j] = heap.front();
    return [arr[i], arr[j]];
}

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number[]}
 */
function kthSmallestPrimeFractionB(arr, k) {
    let [l, r] = [0, 1];
    while (true) {
        const mid = l + (r - l) / 2;
        let [i, x, y, cnt] = [0, 0, 1, 0];
        for (const v of arr.slice(1)) {
            for (; arr[i] / v < mid; i++) {
                if (arr[i] * y > x * v) {
                    [x, y] = [arr[i], v];
                }
            }
            cnt += i;
        }
        if (cnt == k) {
            return [x, y];
        }
        if (cnt < k) {
            l = mid;
        } else {
            r = mid;
        }
    }
}

module.exports = { kthSmallestPrimeFraction, kthSmallestPrimeFractionA, kthSmallestPrimeFractionB };

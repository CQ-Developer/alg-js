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

module.exports = { kthSmallest, kthSmallestA };

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

module.exports = { kthSmallest, kthSmallestA };

/**
 * @param {number[][]} mat
 * @returns {number}
 */
function findPeakGrid(mat) {
    let [l, r] = [-1, mat.length - 1];
    while (l + 1 < r) {
        const i = l + Math.floor((r - l) / 2);
        const j = mat[i].indexOf(Math.max(...mat[i]));
        if (mat[i][j] > mat[i + 1][j]) {
            r = i;
        } else {
            l = i;
        }
    }
    return [r, mat[r].indexOf(Math.max(...mat[r]))];
}

module.exports = { findPeakGrid };

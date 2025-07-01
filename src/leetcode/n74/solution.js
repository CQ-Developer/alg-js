/**
 * @param {number[][]} matrix
 * @param {number} target
 * @returns {boolean}
 */
function searchMatrix(matrix, target) {
    for (const row of matrix) {
        let [l, r] = [-1, row.length];
        while (l + 1 < r) {
            const i = l + Math.floor((r - l) / 2);
            if (row[i] == target) {
                return true;
            }
            if (row[i] < target) {
                l = i;
            } else {
                r = i;
            }
        }
    }
    return false;
}

module.exports = { searchMatrix };

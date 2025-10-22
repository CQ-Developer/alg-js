const _ = require('lodash');

/**
 * @param {number[][]} grid
 * @returns {number}
 */
function minimumOperations(grid) {
    let ops = 0;
    for (const col of _.zip(...grid)) {
        let pre = -1;
        for (const x of col) {
            ops += Math.max(0, pre + 1 - x);
            pre = Math.max(pre + 1, x);
        }
    }
    return ops;
}

module.exports = { minimumOperations };

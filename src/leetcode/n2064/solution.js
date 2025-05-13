/**
 * @param {number} n
 * @param {number[]} quantities
 * @returns {number}
 */
function minimizedMaximum(n, quantities) {

    /**
     * @param {number} x
     * @returns {boolean}
     */
    function check(x) {
        let cnt = quantities.length;
        for (const quantity of quantities) {
            cnt += Math.floor((quantity - 1) / x);
            if (cnt > n) {
                return false;
            }
        }
        return true;
    }

    let l = 1, r = Math.max(...quantities);
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    return l;
}

module.exports = minimizedMaximum;

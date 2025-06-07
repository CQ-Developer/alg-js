/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @returns {number}
 */
function findKthNumber(m, n, k) {
    let [l, r] = [0, m * n];
    while (l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        let cnt = 0;
        for (let i = 1; i <= m; i++) {
            cnt += Math.min(n, Math.floor(mid / i));
        }
        if (cnt >= k) {
            r = mid;
        } else {
            l = mid;
        }
    }
    return r;
}

module.exports = { findKthNumber };

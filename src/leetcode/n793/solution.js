/**
 * @param {number} k
 * @returns {number}
 */
function preimageSizeFZF(k) {
    let [l, r] = [0, 5 * k];
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        let [n, cnt] = [5, 0];
        while (n <= mid) {
            cnt += Math.floor(mid / n);
            n *= 5;
        }
        if (cnt == k) {
            return 5;
        }
        if (cnt < k) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return 0;
}

module.exports = { preimageSizeFZF };

/**
 * @param {number[]} points
 * @param {number} m
 * @returns {number}
 */
function maxScore(points, m) {
    const n = points.length;

    /**
     * @param {number} low
     * @returns {boolean}
     */
    function check(low) {
        let [rest, pre] = [m, 0];
        for (let i = 0; i < n; i++) {
            let k = Math.ceil(low / points[i]) - pre;
            if (i == n - 1 && k <= 0) {
                break;
            }
            k = Math.max(k, 1);
            rest -= 2 * k - 1;
            if (rest < 0) {
                return false;
            }
            pre = k - 1;
        }
        return true;
    }

    let [l, r] = [0, Math.ceil(m / 2) * Math.min(...points) + 1];
    while (l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid)) {
            l = mid;
        } else {
            r = mid;
        }
    }
    return l;
}

module.exports = { maxScore };

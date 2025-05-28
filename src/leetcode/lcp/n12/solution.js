/**
 * @abstract
 * @param {number[]} time
 * @param {number} m
 * @returns {number}
 */
function minTime(time, m) {
    throw new Error('skip');
}

/**
 * @param {number[]} time
 * @param {number} m
 * @returns {number}
 */
function minTimeA(time, m) {

    /**
     * @param {number} mx
     * @returns {boolean}
     */
    function check(mx) {
        let [p, s, d] = [0, 0, 1];
        for (const t of time) {
            const x = Math.max(p, t);
            if (s + t - x <= mx) {
                [s, p] = [s + t, x];
            } else {
                s = p = t;
                d++;
            }
        }
        return d <= m;
    }

    let [l, r] = [-1, time.reduce((acc, cur) => acc + cur, 0)];
    while (l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid)) {
            r = mid;
        } else {
            l = mid;
        }
    }
    return r;
}

module.exports = { minTime, minTimeA };

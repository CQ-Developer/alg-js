/**
 * @param {number[]} start
 * @param {number} d
 * @param {number}
 */
function maxPossibleScore(start, d) {
    throw new Error('skip');
}

/**
 * @param {number[]} start
 * @param {number} d
 * @returns {number}
 */
function maxPossibleScoreA(start, d) {
    /**
     * @param {number} m
     * @returns {boolean}
     */
    function check(m) {
        let p = -m;
        for (const s of start) {
            if (p + m > s + d) {
                return false;
            }
            p = p + m <= s ? s : p + m;
        }
        return true;
    }
    start.sort((a, b) => a - b);
    let [l, r] = [0, start.at(-1) + d];
    while (l <= r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }
    return r;
}

module.exports = { maxPossibleScore, maxPossibleScoreA };

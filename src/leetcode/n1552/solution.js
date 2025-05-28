/**
 * @abstract
 * @param {number[]} position
 * @param {number} m
 * @returns {number}
 */
function maxDistance(position, m) {
    throw new Error('skip');
}

/**
 * @param {number[]} position
 * @param {number} m
 * @returns {number}
 */
function maxDistanceA(position, m) {
    /**
     * @param {number} mid
     * @returns {boolean}
     */
    function check(mid) {
        let [pre, cnt] = [-mid, 0];
        for (const p of position) {
            if (p - pre >= mid) {
                pre = p;
                cnt++;
            }
        }
        return cnt >= m;
    }
    position.sort((a, b) => a - b);
    let [l, r] = [0, position.at(-1) - position.at(0)];
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid)) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return r;
}

module.exports = { maxDistance, maxDistanceA };

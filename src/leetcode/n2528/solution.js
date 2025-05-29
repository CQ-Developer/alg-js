/**
 * @abstract
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @returns {number}
 */
function maxPower(stations, r, k) {
    throw new Error('skip');
}

/**
 * @param {number[]} stations
 * @param {number} r
 * @param {number} k
 * @returns {number}
 */
function maxPowerA(stations, r, k) {
    const n = stations.length;
    const pre = Array.from({ length: n + 1 }, () => 0);
    for (let i = 0; i < n; i++) {
        pre[i + 1] = pre[i] + stations[i];
    }
    let mn = Infinity;
    const powers = new Array(n);
    for (let i = 0; i < n; i++) {
        powers[i] = pre[Math.min(n, i + r + 1)] - pre[Math.max(0, i - r)];
        mn = Math.min(mn, powers[i]);
    }
    /**
     * @param {number} minPower
     * @returns {boolean}
     */
    function check(minPower) {
        let [difSum, need] = [0, 0];
        const dif = Array.from({ length: n + 1 }, () => 0);
        for (let i = 0; i < n; i++) {
            difSum += dif[i];
            const m = minPower - powers[i] - difSum;
            if (m > 0) {
                need += m;
                if (need > k) {
                    return false;
                }
                difSum += m;
                if (i + 2 * r + 1 < n) {
                    dif[i + 2 * r + 1] -= m;
                }
            }
        }
        return true;
    }
    let [left, right] = [mn, mn + k + 1];
    while (left + 1 < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (check(mid)) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return left;
}

module.exports = { maxPower, maxPowerA };

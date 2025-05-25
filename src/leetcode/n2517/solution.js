/**
 * @param {number[]} price
 * @param {number} k
 * @returns {number}
 */
function maximumTastiness(price, k) {
    /**
     * @param {number} m
     * @returns {boolean}
     */
    function check(m) {
        let [pre, cnt] = [-m, 0];
        for (const p of price) {
            if (p - pre >= m) {
                pre = p;
                cnt++;
            }
        }
        return cnt >= k;
    }
    price.sort((a, b) => a - b);
    let [l, r] = [0, price.at(-1) - price.at(0)];
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

module.exports = { maximumTastiness };

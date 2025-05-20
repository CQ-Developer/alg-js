/**
 * @param {number} d1
 * @param {number} d2
 * @param {number} u1
 * @param {number} u2
 * @returns {number}
 */
function minimizeSetA(d1, d2, u1, u2) {
    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    function gcd(a, b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    const lcm = Math.floor((d1 * d2) / gcd(d1, d2));
    /**
     * @param {number} x
     * @returns {boolean}
     */
    function check(x) {
        const [a, b, c] = [Math.floor(x / d1), Math.floor(x / d2), Math.floor(x / lcm)];
        return x - a - b + c >= Math.max(0, u1 - b + c) + Math.max(0, u2 - a + c);
    }
    let [l, r] = [0, (u1 + u2) * 2 - 1];
    while (l < r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return r;
}

module.exports = { minimizeSetA }

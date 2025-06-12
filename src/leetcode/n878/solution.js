/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function nthMagicalNumber(n, a, b) {
    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    function gcd(a, b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    const lcm = a * b / gcd(a, b);
    let [l, r] = [1, Math.min(a, b) * n];
    while (l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (Math.floor(mid / a) + Math.floor(mid / b) - Math.floor(mid / lcm) >= n) {
            r = mid;
        } else {
            l = mid;
        }
    }
    return r % 1000000007;
}

module.exports = { nthMagicalNumber };

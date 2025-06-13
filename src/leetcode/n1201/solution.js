/**
 * @param {number} n 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns {number}
 */
function nthUglyNumber(n, a, b, c) {
    /**
     * @param {number} a
     * @param {number} b
     * @returns {number}
     */
    function gcd(a, b) {
        return b == 0 ? a : gcd(b, a % b);
    }
    const [ab, bc, ca] = [Math.floor(a * b / gcd(a, b)), Math.floor(b * c / gcd(b, c)), Math.floor(c * a / gcd(c, a))];
    const abc = Math.floor(ab * c / gcd(ab, c));
    const min = Math.min(a, b, c);
    let [l, r] = [min, min * n];
    while (l < r) {
        const m = l + Math.floor((r - l) / 2);
        if (Math.floor(m / a) + Math.floor(m / b) + Math.floor(m / c) - Math.floor(m / ab) - Math.floor(m / bc) - Math.floor(m / ca) + Math.floor(m / abc) >= n) {
            r = m;
        } else {
            l = m + 1;
        }
    }
    return r;
}

module.exports = { nthUglyNumber };

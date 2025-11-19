/**
 * @param {number} x
 * @param {number} n
 * @returns {number}
 */
function myPow(x, n) {
    let m = BigInt(n);
    if (m < 0n) {
        m = -m;
        x = 1 / x;
    }
    let p = 1.0;
    for (; m > 0n; m /= 2n) {
        if ((m & 1n) == 1n) {
            p *= x;
        }
        x *= x;
    }
    return p;
}

module.exports = { myPow };

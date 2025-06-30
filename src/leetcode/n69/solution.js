/**
 * @param {number} x
 * @returns {number}
 */
function mySqrt(x) {
    let [l, r] = [0, Math.ceil(x / 2)];
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (mid * mid <= x) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return r;
}

module.exports = { mySqrt };

/**
 * @param {number} n
 * @param {function(number):number} guess
 * @returns {number}
 */
function guessNumber(n, guess) {
    let [l, r] = [1, n];
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        const x = guess(mid);
        if (x == -1 || x == 0) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

module.exports = { guessNumber };

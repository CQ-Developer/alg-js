/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @returns {number}
 */
function maximizeWinA(prizePositions, k) {
    const n = prizePositions.length;
    if (k * 2 + 1 >= prizePositions[n - 1] - prizePositions[0]) {
        return n;
    }
    let res = 0;
    const mx = Array(n + 1).fill(0);
    for (let [l, r] = [0, 0]; r < n; r++) {
        while (prizePositions[r] - prizePositions[l] > k) {
            l++;
        }
        res = Math.max(res, mx[l] + r - l + 1);
        mx[r + 1] = Math.max(mx[r], r - l + 1);
    }
    return res;
}

/**
 * @param {number[]} prizePositions
 * @param {number} k
 * @returns {number}
 */
function maximizeWinB(prizePositions, k) {
    const n = prizePositions.length;
    if (k * 2 + 1 >= prizePositions[n - 1] - prizePositions[0]) {
        return n;
    }
    let res = 0;
    for (let [mx, r, l, i] = [0, 0, 0, 0]; i < n; i++) {
        while (prizePositions[r] - prizePositions[i] <= k) {
            r++;
        }
        res = Math.max(res, mx + r - i);
        while (prizePositions[i] - prizePositions[l] > k) {
            l++;
        }
        mx = Math.max(mx, i - l + 1);
    }
    return res;
}

module.exports = { maximizeWinA, maximizeWinB };

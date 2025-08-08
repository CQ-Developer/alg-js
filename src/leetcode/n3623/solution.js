/**
 * @param {number[][]} points
 * @returns {number}
 */
function countTrapezoids(points) {
    const tab = new Map();
    for (const [, y] of points) {
        tab.set(y, (tab.get(y) ?? 0) + 1);
    }
    let [res, p] = [0n, 0n];
    for (const v of tab.values()) {
        const x = BigInt(v);
        const k = x * (x - 1n) / 2n;
        res += k * p;
        p += k;
    }
    return Number(res % 1000000007n);
}

module.exports = {countTrapezoids};

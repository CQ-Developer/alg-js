/**
 * @param {number[][]} arrays
 * @returns {number}
 */
function maxDistance(arrays) {
    let [res, mn, mx] = [0, arrays.at(0).at(0), arrays.at(0).at(-1)];
    for (const arr of arrays.slice(1)) {
        const [a, b] = [arr.at(0), arr.at(-1)];
        res = Math.max(res, mx - a, b - mn);
        mn = Math.min(mn, a);
        mx = Math.max(mx, b);
    }
    return res;
}

module.exports = { maxDistance };

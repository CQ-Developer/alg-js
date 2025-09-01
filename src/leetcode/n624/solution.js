/**
 * @param {number[][]} arrays
 * @returns {number}
 */
function maxDistance(arrays) {
    let [res, mn, mx] = [0, arrays[0][0], arrays[0][arrays[0].length - 1]];
    for (const arr of arrays.slice(1)) {
        const [a, b] = [arr[0], arr[arr.length - 1]];
        res = Math.max(res, mx - a, b - mn);
        mn = Math.min(mn, a);
        mx = Math.max(mx, b);
    }
    return res;
}

module.exports = { maxDistance };

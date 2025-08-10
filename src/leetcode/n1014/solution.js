/**
 * @param {number[]} values
 * @returns {number}
 */
function maxScoreSightseeingPair(values) {
    let [mx, res] = [values[0], -Infinity];
    for (let i = 1; i < values.length; i++) {
        res = Math.max(res, mx + values[i] - i);
        mx = Math.max(mx, values[i] + i);
    }
    return res;
}

module.exports = { maxScoreSightseeingPair };

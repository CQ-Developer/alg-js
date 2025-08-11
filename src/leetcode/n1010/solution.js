/**
 * @param {number[]} time
 * @returns {number}
 */
function numPairsDivisibleBy60(time) {
    let res = 0;
    const cnt = Array(60).fill(0);
    for (const t of time) {
        res += cnt[(60 - (t % 60)) % 60];
        cnt[t % 60]++;
    }
    return res;
}

module.exports = {numPairsDivisibleBy60};

/**
 * @param {number[]} hours
 * @returns {number}
 */
function countCompleteDayPairs(hours) {
    let result = 0;
    const cnt = Array(24).fill(0);
    for (const hour of hours) {
        result += cnt[(24 - (hour % 24)) % 24];
        cnt[hour % 24]++;
    }
    return result;
}

module.exports = {countCompleteDayPairs};

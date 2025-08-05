/**
 * @param {number[]} dominoes
 * @returns {number}
 */
function numEquivDominoPairs(dominoes) {
    let result = 0;
    const cnt = Array.from({length: 10}, () => Array(10).fill(0));
    for (const [i, j] of dominoes) {
        result += i <= j ? cnt[i][j]++ : cnt[j][i]++;
    }
    return result;
}

module.exports = {numEquivDominoPairs};

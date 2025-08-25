/**
 * @param {string} s
 * @returns {number}
 */
function calculateScore(s) {
    const table = Array.from({ length: 26 }, () => []);
    let score = 0;
    for (let i = 0; i < s.length; i++) {
        const x = s.charCodeAt(i) - 97;
        if (table[25 - x].length) {
            score += i - table[25 - x].pop();
        } else {
            table[x].push(i);
        }
    }
    return score;
}

module.exports = { calculateScore };

/**
 * @param {string[]} words
 * @returns {number}
 */
function similarPairs(words) {
    let res = 0;
    const cnt = new Map();
    for (const word of words) {
        let k = 0;
        for (let i = 0; i < word.length; i++) {
            k |= 1 << (word.codePointAt(i) & 0x1f);
        }
        const p = cnt.get(k) ?? 0;
        res += p;
        cnt.set(k, p + 1);
    }
    return res;
}

module.exports = {similarPairs};

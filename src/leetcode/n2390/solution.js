/**
 * @param {string} s
 * @returns {string}
 */
function removeStarsA(s) {
    const a = [];
    for (const x of s) {
        if (x == '*') {
            a.pop();
        } else {
            a.push(x);
        }
    }
    return a.join('');
}

/**
 * @param {string} s
 * @returns {string}
 */
function removeStarsB(s) {
    const arr = [...s];
    let w = 0;
    for (let r = 0; r < s.length; r++) {
        if (arr[r] == '*') {
            w--;
        } else {
            arr[w++] = arr[r];
        }
    }
    return arr.slice(0, w).join('');
}

module.exports = { removeStarsA, removeStarsB };

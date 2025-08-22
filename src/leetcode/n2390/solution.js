/**
 * @param {string} s
 * @returns {string}
 */
function removeStarsA(s) {
    const a = [];
    let cnt = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '*') {
            cnt++;
        } else {
            if (cnt > 0) {
                cnt--;
            } else {
                a.push(s[i]);
            }
        }
    }
    return a.reverse().join('');
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

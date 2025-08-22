/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function backspaceCompareA(s, t) {
    const a = [];
    for (const c of s) {
        if (c == '#') {
            a.pop()
        } else {
            a.push(c);
        }
    }
    const b = [];
    for (const c of t) {
        if (c == '#') {
            b.pop()
        } else {
            b.push(c);
        }
    }
    return a.join('') == b.join('');
}

/**
 * @param {string} s
 * @param {string} t
 * @returns {boolean}
 */
function backspaceCompareB(s, t) {
    let [i, j] = [s.length - 1, t.length - 1];
    let [skip1, skip2] = [0, 0];
    while (i >= 0 || j >= 0) {
        while (i >= 0) {
            if (s[i] == '#') {
                skip1++;
                i--;
            } else if (skip1 > 0) {
                skip1--;
                i--;
            } else {
                break;
            }
        }
        while (j >= 0) {
            if (t[j] == '#') {
                skip2++;
                j--;
            } else if (skip2 > 0) {
                skip2--;
                j--;
            } else {
                break;
            }
        }
        if (i >= 0 && j >= 0) {
            if (s[i] != t[j]) {
                return false;
            }
        } else if (i >= 0 || j >= 0) {
            return false;
        }
        i--;
        j--;
    }
    return true;
}

module.exports = { backspaceCompareA, backspaceCompareB };

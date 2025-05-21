/**
 * @param {string} s
 * @param {number} numOps
 * @returns {number}
 */
function minLength(s, numOps) {
    throw new Error('skip');
}

/**
 * @param {string} s
 * @param {number} numOps
 * @returns {number}
 */
function minLengthA(s, numOps) {
    const n = s.length;

    /**
     * @param {number} m
     * @returns {boolean}
     */
    function check(m) {
        let cnt = 0;
        if (m == 1) {
            for (let i = 0; i < n; i++) {
                cnt += (s.charCodeAt(i) ^ i) & 1;
            }
            cnt = Math.min(cnt, n - cnt);
        } else {
            for (let [len, i] = [0, 0]; i < n; i++) {
                len++;
                if (i == n - 1 || s[i] != s[i + 1]) {
                    cnt += Math.floor(len / (m + 1));
                    len = 0;
                }
            }
        }
        return cnt <= numOps;
    }

    let [l, r] = [0, n];
    while (l + 1 < r) {
        const m = l + Math.floor((r - l) / 2);
        if (check(m)) {
            r = m;
        } else {
            l = m;
        }
    }
    return r;
}

module.exports = { minLength, minLengthA };

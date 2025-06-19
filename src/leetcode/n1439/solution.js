/**
 * @abstract
 * @param {number[][]} mat
 * @param {number} k
 * @returns {number}
 */
function kthSmallest(mat, k) {
    throw new Error('skip');
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @returns {number}
 */
function kthSmallestA(mat, k) {
    let res = mat[0].slice(0, k);
    for (const row of mat.slice(1)) {
        let cur = [];
        for (const x of res) {
            for (const y of row) {
                cur.push(x + y);
            }
        }
        res = cur.sort((a, b) => a - b).slice(0, k);
    }
    return res.at(-1);
}

/**
 * @param {number[][]} mat
 * @param {number} k
 * @returns {number}
 */
function kthSmallestB(mat, k) {
    /**
     * @param {number} i
     * @param {number} rest
     * @returns {number}
     */
    function check(i, rest) {
        if (i == mat.length) {
            return 1;
        }
        let ans = 0;
        for (const x of mat[i]) {
            if (x - mat[i][0] > rest || ans >= k) {
                break;
            }
            ans += check(i + 1, rest - x + mat[i][0]);
        }
        return ans;
    }
    let [l, r] = [0, 0];
    for (const row of mat) {
        l += row.at(0);
        r += row.at(-1);
    }
    const base = l;
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(0, mid - base) >= k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

module.exports = { kthSmallest, kthSmallestA, kthSmallestB };

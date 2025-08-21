/**
 * @abstract
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @returns {number}
 */
function maxSubarrays(n, conflictingPairs) {
    throw new Error('skip');
}

/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @returns {number}
 */
function maxSubarraysA(n, conflictingPairs) {
    const groups = Array.from({ length: n + 1 }, () => Array());
    for (let [a, b] of conflictingPairs) {
        if (a > b) {
            [a, b] = [b, a];
        }
        groups[a].push(b);
    }
    let ans = 0;
    const extra = Array(n + 2).fill(0);
    const b = [n + 1, n + 1];
    for (let i = n; i > 0; i--) {
        b.push(...groups[i]);
        b.sort((a, b) => a - b).splice(2);
        const b0 = b[0];
        ans += b0 - i;
        extra[b0] += b[1] - b0;
    }
    return ans + Math.max(...extra);
}

/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @returns {number}
 */
function maxSubarraysB(n, conflictingPairs) {
    const groups = Array.from({ length: n + 1 }, () => Array());
    for (let [a, b] of conflictingPairs) {
        if (a > b) {
            [a, b] = [b, a];
        }
        groups[a].push(b);
    }
    let [ans, mx, ex] = [0, 0, 0];
    let [b0, b1] = [n + 1, n + 1];
    for (let i = n; i > 0; i--) {
        const _b0 = b0;
        for (const b of groups[i]) {
            if (b < b0) {
                [b0, b1] = [b, b0];
            } else if (b < b1) {
                b1 = b;
            }
        }
        ans += b0 - i;
        if (_b0 != b0) {
            ex = 0;
        }
        ex += b1 - b0;
        mx = Math.max(mx, ex);
    }
    return ans + mx;
}

/**
 * @param {number} n
 * @param {number[][]} conflictingPairs
 * @returns {number}
 */
function maxSubarraysC(n, conflictingPairs) {
    const g0 = Array(n + 1).fill(n + 1);
    const g1 = Array(n + 1).fill(n + 1);
    for (let [i, v] of conflictingPairs) {
        if (i > v) {
            [i, v] = [v, i];
        }
        if (v < g0[i]) {
            [g0[i], g1[i]] = [v, g0[i]];
        } else if (v < g1[i]) {
            g1[i] = v;
        }
    }
    let [ans, mx, ex] = [0, 0, 0];
    let [b0, b1] = [n + 1, n + 1];
    for (let i = n; i > 0; i--) {
        const _b0 = b0;
        if (g0[i] < b0) {
            [b0, b1] = [g0[i], Math.min(b0, g1[i])];
        } else if (g0[i] < b1) {
            b1 = g0[i];
        }
        ans += b0 - i;
        if (b0 != _b0) {
            ex = 0;
        }
        ex += b1 - b0;
        mx = Math.max(mx, ex);
    }
    return ans + mx;
}

module.exports = { maxSubarrays, maxSubarraysA, maxSubarraysB, maxSubarraysC };

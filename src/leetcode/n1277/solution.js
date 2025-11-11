/**
 * @param {number[][]} matrix
 * @returns {number}
 */
function countSquaresA(matrix) {
    let cnt = 0;
    const m = matrix.length, n = matrix[0].length;
    for (let top = 0; top < m; top++) {
        const arr = Array.from({ length: n }, () => { return 0; });
        for (let i = top; i < m; i++) {
            const h = i - top + 1;
            for (let p = -1, j = 0; j < n; j++) {
                arr[j] += matrix[i][j];
                if (arr[j] != h) {
                    p = j;
                } else if (j - p >= h) {
                    cnt++;
                }
            }
        }
    }
    return cnt;
}

/**
 * @param {number[][]} matrix
 * @returns {number}
 */
function countSquaresB(matrix) {
    let cnt = 0;
    const m = matrix.length, n = matrix[0].length;
    const dp = Array.from({ length: m + 1 }, () => {
        return Array.from({ length: n + 1 }, () => {
            return 0;
        });
    });
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j]) {
                dp[i + 1][j + 1] = Math.min(dp[i][j], dp[i + 1][j], dp[i][j + 1]) + 1;
                cnt += dp[i + 1][j + 1];
            }
        }
    }
    return cnt;
}

/**
 * @param {number[][]} matrix
 * @returns {number}
 */
function countSquaresC(matrix) {
    let cnt = 0;
    const n = matrix[0].length;
    const dp = Array.from({ length: n + 1 }, () => { return 0; });
    for (const row of matrix) {
        let pre = 0;
        for (let j = 0; j < n; j++) {
            const tmp = dp[j + 1];
            dp[j + 1] = row[j] ? Math.min(pre, dp[j + 1], dp[j]) + 1 : 0;
            cnt += dp[j + 1];
            pre = tmp;
        }
    }
    return cnt;
}

/**
 * @param {number[][]} matrix
 * @returns {number}
 */
function countSquaresD(matrix) {
    let cnt = 0;
    const n = matrix[0].length;
    const height = Array.from({ length: n + 1 }, () => { return 0; });
    const count = () => {
        let cnt = 0;
        const stk = [-1];
        for (let r = 0; r <= n; r++) {
            const hr = height[r];
            while (stk.length > 1 && height[stk.at(-1)] >= hr) {
                const h = height[stk.pop()];
                const l = stk.at(-1);
                const w = r - l - 1;
                const up = Math.min(h, w);
                const low = (l < 0 ? hr : Math.max(height[l], hr)) + 1;
                if (low <= up) {
                    cnt += Math.floor((w * 2 + 2 - low - up) * (up - low + 1) / 2);
                }
            }
            stk.push(r);
        }
        return cnt;
    };
    for (const row of matrix) {
        for (let j = 0; j < n; j++) {
            if (row[j]) {
                height[j]++;
            } else {
                height[j] = 0;
            }
        }
        cnt += count();
    }
    return cnt;
}

module.exports = { countSquaresA, countSquaresB, countSquaresC, countSquaresD };

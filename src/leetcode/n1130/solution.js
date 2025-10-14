/**
 * @param {number[]} arr
 * @returns {number}
 */
function mctFromLeafValuesA(arr) {
    const n = arr.length;
    const dp = Array.from({ length: n }, () => {
        return Array.from({ length: n }, () => Infinity);
    });
    const mx = Array.from({ length: n }, () => {
        return Array.from({ length: n }, () => 0);
    });
    for (let j = 0; j < n; j++) {
        [dp[j][j], mx[j][j]] = [0, arr[j]];
        for (let i = j - 1; i >= 0; i--) {
            mx[i][j] = Math.max(arr[i], mx[i + 1][j]);
            for (let k = i; k < j; k++) {
                dp[i][j] = Math.min(dp[i][j], dp[i][k] + dp[k + 1][j] + mx[i][k] * mx[k + 1][j]);
            }
        }
    }
    return dp[0][n - 1];
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function mctFromLeafValuesB(arr) {
    let sum = 0;
    const stack = [];
    for (const x of arr) {
        while (stack.length && x >= stack[stack.length - 1]) {
            const y = stack.pop();
            if (!stack.length || stack[stack.length - 1] > x) {
                sum += y * x;
            } else {
                sum += y * stack[stack.length - 1];
            }
        }
        stack.push(x);
    }
    while (stack.length > 1) {
        const x = stack.pop();
        sum += stack[stack.length - 1] * x;
    }
    return sum;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function mctFromLeafValuesC(arr) {
    let sum = 0;
    while (arr.length > 1) {
        let [mn, j] = [Infinity, -1];
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] * arr[i + 1] < mn) {
                mn = arr[i] * arr[i + 1];
                j = arr[i] < arr[i + 1] ? i : i + 1;
            }
        }
        sum += mn;
        arr.splice(j, 1);
    }
    return sum;
}

module.exports = { mctFromLeafValuesA, mctFromLeafValuesB, mctFromLeafValuesC };

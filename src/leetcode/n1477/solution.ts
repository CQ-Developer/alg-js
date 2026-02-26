export function minSumOfLengthsA(arr: number[], target: number): number {
    const n = arr.length;
    let ans = n + 1, pre = 0;
    const dp = [n], map = new Map([[0, -1]]);
    arr.forEach((x, i) => {
        pre += x;
        const j = map.get(pre - target);
        if (j == undefined) {
            dp[i + 1] = dp[i];
        } else {
            ans = Math.min(ans, i - j + dp[j + 1]);
            dp[i + 1] = Math.min(dp[i], i - j);
        }
        map.set(pre, i);
    });
    return ans == n + 1 ? - 1 : ans;
}

export function minSumOfLengthsB(arr: number[], target: number): number {
    const n = arr.length;
    let ans = n + 1, win = 0;
    const dp = [n];
    for (let l = 0, r = 0; r < n; r++) {
        win += arr[r];
        for (; win > target; l++) {
            win -= arr[l];
        }
        if (win == target) {
            ans = Math.min(ans, r - l + 1 + dp[l]);
            dp[r + 1] = Math.min(dp[r], r - l + 1);
        } else {
            dp[r + 1] = dp[r];
        }
    }
    return ans == n + 1 ? -1 : ans;
}

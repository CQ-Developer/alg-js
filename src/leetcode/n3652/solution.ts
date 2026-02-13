export function maxProfitA(prices: number[], strategy: number[], k: number): number {
    const n = prices.length;
    const sum = [0], pre = [0];
    for (let i = 0; i < n; i++) {
        sum[i + 1] = sum[i] + prices[i] * strategy[i];
        pre[i + 1] = pre[i] + prices[i];
    }
    let mx = sum[n];
    for (let i = k; i <= n; i++) {
        mx = Math.max(mx, sum[i - k] + sum[n] - sum[i] + pre[i] - pre[i - k / 2]);
    }
    return mx;
}

export function maxProfitB(prices: number[], strategy: number[], k: number): number {
    let total = 0, sum = 0, maxSum = 0;
    const n = prices.length;
    for (let i = 0; i < n; i++) {
        const p = prices[i], s = strategy[i];
        total += p * s;
        sum += p * (1 - s);
        if (i < k - 1) {
            if (i >= k / 2 - 1) {
                sum -= prices[i - k / 2 + 1];
            }
            continue;
        }
        maxSum = Math.max(maxSum, sum);
        sum -= prices[i - k / 2 + 1] - prices[i - k + 1] * strategy[i - k + 1];
    }
    return total + maxSum;
}

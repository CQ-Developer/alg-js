export function differenceOfDistinctValuesA(grid: number[][]): number[][] {
    const m = grid.length, n = grid[0].length;
    const ans = Array.from({ length: m }, () => new Array<number>(n));
    const set = new Set<number>();
    for (let k = 1; k < m + n; k++) {
        const mn = Math.max(n - k, 0), mx = Math.min(m + n - 1 - k, n - 1);
        set.clear();
        for (let j = mn; j <= mx; j++) {
            const i = k + j - n;
            ans[i][j] = set.size;
            set.add(grid[i][j]);
        }
        set.clear();
        for (let j = mx; j >= mn; j--) {
            const i = k + j - n;
            ans[i][j] = Math.abs(ans[i][j] - set.size);
            set.add(grid[i][j]);
        }
    }
    return ans;
}

export function differenceOfDistinctValuesB(grid: number[][]): number[][] {
    function bitCount(x: bigint): number {
        let cnt = 0;
        while (x > 0n) {
            x &= (x - 1n);
            cnt++;
        }
        return cnt;
    }
    const m = grid.length, n = grid[0].length;
    const ans = Array.from({ length: m }, () => new Array<number>(n));
    for (let k = 1; k < m + n; k++) {
        const mn = Math.max(n - k, 0), mx = Math.min(m + n - 1 - k, n - 1);
        let bit = 0n;
        for (let j = mn; j <= mx; j++) {
            const i = k + j - n;
            ans[i][j] = bitCount(bit);
            bit |= 1n << BigInt(grid[i][j]);
        }
        bit = 0n;
        for (let j = mx; j >= mn; j--) {
            const i = k + j - n;
            ans[i][j] = Math.abs(ans[i][j] - bitCount(bit));
            bit |= 1n << BigInt(grid[i][j]);
        }
    }
    return ans;
}

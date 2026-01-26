export function sortMatrixA(grid: number[][]): number[][] {
    const n = grid.length;
    // 左下角
    for (let i = 0; i < n - 1; i++) {
        const arr = new Array<number>(n - i);
        for (let j = 0, y = 0, x = i; x < n; j++, y++, x++) {
            arr[j] = grid[x][y];
        }
        arr.sort((a, b) => b - a);
        for (let j = 0, y = 0, x = i; x < n; j++, y++, x++) {
            grid[x][y] = arr[j];
        }
    }
    // 右上角
    for (let j = 1; j < n - 1; j++) {
        const arr = new Array<number>(n - j);
        for (let i = 0, x = 0, y = j; y < n; i++, x++, y++) {
            arr[i] = grid[x][y];
        }
        arr.sort((a, b) => a - b);
        for (let i = 0, x = 0, y = j; y < n; i++, x++, y++) {
            grid[x][y] = arr[i];
        }
    }
    return grid;
}

export function sortMatrixB(grid: number[][]): number[][] {
    const n = grid.length;
    for (let k = 1; k < n + n; k++) {
        const mn = Math.max(n - k, 0), mx = Math.min(n + n - k - 1, n - 1);
        const arr = new Array<number>(mx - mn + 1);
        for (let j = mn; j <= mx; j++) {
            arr[j - mn] = grid[k + j - n][j];
        }
        arr.sort((a, b) => k < n ? a - b : b - a);
        for (let j = mn; j <= mx; j++) {
            grid[k + j - n][j] = arr[j - mn];
        }
    }
    return grid;
}

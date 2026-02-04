export function diagonalSort(mat: number[][]): number[][] {
    const m = mat.length, n = mat[0].length;
    for (let k = 1; k < m + n; k++) {
        const mn = Math.max(n - k, 0), mx = Math.min(m + n - 1 - k, n - 1);
        const arr = new Array<number>(mx - mn + 1);
        for (let j = mn; j <= mx; j++) {
            arr[j - mn] = mat[k + j - n][j];
        }
        arr.sort((a, b) => a - b);
        for (let j = mn; j <= mx; j++) {
            mat[k + j - n][j] = arr[j - mn];
        }
    }
    return mat;
}

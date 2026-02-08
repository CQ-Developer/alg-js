export function findDiagonalOrder(mat: number[][]): number[] {
    const m = mat.length, n = mat[0].length;
    const arr = new Array<number>();
    for (let k = 0; k < m + n - 1; k++) {
        const minJ = Math.max(k - m + 1, 0), maxJ = Math.min(k, n - 1);
        if (k % 2 == 0) {
            for (let j = minJ; j <= maxJ; j++) {
                arr.push(mat[k - j][j]);
            }
        } else {
            for (let j = maxJ; j >= minJ; j--) {
                arr.push(mat[k - j][j]);
            }
        }
    }
    return arr;
}

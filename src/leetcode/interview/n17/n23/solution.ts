export function findSquare(matrix: number[][]): number[] {
    const n = matrix.length;
    const left = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
    const up = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
    let r = 0, c = 0, size = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            if (matrix[i - 1][j - 1] == 0) {
                left[i][j] = left[i][j - 1] + 1;
                up[i][j] = up[i - 1][j] + 1;
                let border = Math.min(left[i][j], up[i][j]);
                while (left[i - border + 1][j] < border || up[i][j - border + 1] < border) {
                    border--;
                }
                if (border > size) {
                    r = i - border;
                    c = j - border;
                    size = border;
                }
            }
        }
    }
    return size == 0 ? [] : [r, c, size];
}

export function maximuimValueSum(board: number[][]): number {
    function update(row: number[], p: number[][]) {
        const n = row.length;
        for (let j = 0; j < n; j++) {
            const x = row[j];
            if (x > p[0][0]) {
                if (j != p[0][1]) {
                    if (j != p[1][1]) {
                        p[2] = p[1];
                    }
                    p[1] = p[0];
                }
                p[0] = [x, j];
            } else if (x > p[1][0] && j != p[0][1]) {
                if (j != p[1][1]) {
                    p[2] = p[1];
                }
                p[1] = [x, j];
            } else if (x > p[2][0] && j != p[0][1] && j != p[1][1]) {
                p[2] = [x, j];
            }
        }
    }
    const m = board.length, n = board[0].length;
    const p = new Array<number[]>(3);
    for (let i = 0; i < 3; i++) {
        p[i] = [-Infinity, 0];
    }
    const suf = new Array<number[][]>(m);
    for (let i = m - 1; i > 1; i--) {
        update(board[i], p);
        suf[i] = new Array<number[]>(3);
        for (let j = 0; j < 3; j++) {
            suf[i][j] = [...p[j]];
        }
    }
    for (const a of p) {
        a[0] = -Infinity;
    }
    let ans = -Infinity;
    for (let i = 1; i < m - 1; i++) {
        update(board[i - 1], p);
        for (let j = 0; j < n; j++) {
            for (const a of p) {
                for (const b of suf[i + 1]) {
                    if (j != a[1] && j != b[1] && a[1] != b[1]) {
                        ans = Math.max(ans, a[0] + b[0] + board[i][j]);
                        break;
                    }
                }
            }
        }
    }
    return ans;
}

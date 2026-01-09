export function numberOfRightTriangles(grid: number[][]): number {
    const n = grid[0].length;
    const colSum = Array(n).fill(-1);
    for (const row of grid) {
        for (let j = 0; j < n; j++) {
            colSum[j] += row[j];
        }
    }
    let cnt = 0;
    for (const row of grid) {
        let rowSum = -1;
        for (const x of row) {
            rowSum += x;
        }
        for (let j = 0; j < n; j++) {
            if (row[j] == 1) {
                cnt += rowSum * colSum[j];
            }
        }
    }
    return cnt;
}

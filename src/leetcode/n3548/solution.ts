import _ from 'lodash';

type canPartitionGrid = (grid: number[][]) => boolean;

function canPartitionGridA(grid: number[][]): boolean {
    const total = grid.map(v => _.sum(v)).reduce((p, c) => p + c, 0);
    const doPart = (g: number[][]): boolean => {
    const m = g.length, n = g[0].length;
        const set = new Set();
        set.add(0);
        let sum = 0;
        for (let i = 0; i < m; i++) {
            const row = g[i];
            for (let j = 0; j < n; j++) {
                sum += row[j];
                if (i > 0 || j == 0 || j == n - 1) {
                    set.add(row[j]);
                }
            }
            if (n == 1) {
                if (2 * sum == total || 2 * sum - total == g[0][0] || 2 * sum - total == row[0]) {
                    return true;
                }
                continue;
            }
            if (set.has(2 * sum - total)) {
                return true;
            }
            if (i == 0) {
                row.forEach(v => set.add(v));
            }
        }
        return false;
    };
    const check = (g: number[][]): boolean => {
        return doPart(g) || doPart(_.reverse([...g]));
    };
    return check(grid) || check(_.zip(...grid) as number[][]);
}

export { canPartitionGrid, canPartitionGridA };

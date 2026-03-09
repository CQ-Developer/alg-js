export function numSubmatricesSumTarget(matrix: number[][], target: number): number {
    const m = matrix.length, n = matrix[0].length;
    let ans = 0;
    for (let t = 0; t < m; t++) {
        const pre = Array.from({ length: n }, () => 0);
        for (let i = t; i < m; i++) {
            for (let j = 0; j < n; j++) {
                pre[j] += matrix[i][j];
            }
            let s = 0;
            const cnt = new Map<number, number>();
            for (const x of pre) {
                cnt.set(s, (cnt.get(s) ?? 0) + 1);
                s += x;
                ans += cnt.get(s - target) ?? 0;
            }
        }
    }
    return ans;
}

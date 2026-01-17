export function maximumScore(scores: number[], edges: number[][]): number {
    const n = scores.length;
    const g = Array.from({ length: n }, () => new Array<number>());
    for (const [x, y] of edges) {
        g[x].push(y);
        g[y].push(x);
    }
    for (let i = 0; i < n; i++) {
        if (g[i].length > 3) {
            g[i].sort((a, b) => scores[b] - scores[a]).splice(3);
        }
    }
    let ans = -1;
    for (const [x, y] of edges) {
        for (const a of g[x]) {
            for (const b of g[y]) {
                if (a != y && b != x && a != b) {
                    ans = Math.max(ans, scores[a] + scores[x] + scores[y] + scores[b]);
                }
            }
        }
    }
    return ans;
}

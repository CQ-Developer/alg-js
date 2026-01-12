export function countPairsOfConnectableServers(edges: number[][], signalSpeed: number): number[] {
    const n = edges.length + 1;
    const g = Array.from({ length: n }, () => Array<number[]>());
    for (const [x, y, w] of edges) {
        g[x].push([y, w]);
        g[y].push([x, w]);
    }
    const dfs = (node: number, from: number, sum: number): number => {
        let cnt = sum % signalSpeed ? 0 : 1;
        for (const [to, weight] of g[node]) {
            if (to != from) {
                cnt += dfs(to, node, sum + weight);
            }
        }
        return cnt;
    };
    let ans = Array.from({ length: n }, () => 0);
    for (let from = 0; from < n; from++) {
        if (g[from].length > 1) {
            let pre = 0;
            for (const [to, weight] of g[from]) {
                const cnt = dfs(to, from, weight);
                ans[from] += cnt * pre;
                pre += cnt;
            }
        }
    }
    return ans;
}

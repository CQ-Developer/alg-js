const isPrime = Array.from({ length: 100000 + 1 }, () => true);
isPrime[1] = false;
for (let i = 2; i * i <= 100000; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= 100000; j += i) {
            isPrime[j] = false;
        }
    }
}

export function countPaths(n: number, edges: number[][]): number {
    const g = Array.from({ length: n + 1 }, () => new Array<number>());
    for (const [x, y] of edges) {
        g[x].push(y);
        g[y].push(x);
    }
    function dfs(nodes: number[], f: number, c: number) {
        nodes.push(c);
        for (const t of g[c]) {
            if (t != f && !isPrime[t]) {
                dfs(nodes, c, t);
            }
        }
    }
    let ans = 0;
    const cache = Array.from({ length: n + 1 }, () => 0);
    for (let i = 2; i <= n; i++) {
        if (isPrime[i]) {
            let sum = 0;
            for (const j of g[i]) {
                if (isPrime[j]) {
                    continue;
                }
                if (cache[j] == 0) {
                    const nodes = new Array<number>();
                    dfs(nodes, i, j);
                    for (const k of nodes) {
                        cache[k] = nodes.length;
                    }
                }
                ans += sum * cache[j];
                sum += cache[j];
            }
            ans += sum;
        }
    }
    return ans;
}

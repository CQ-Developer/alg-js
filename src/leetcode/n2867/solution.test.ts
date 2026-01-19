import { countPaths } from "./solution.ts";

function register(f: (n: number, edges: number[][]) => number) {
    describe("count valid paths in a tree", () => {
        it.each([
            { n: 5, edges: [[1, 2], [1, 3], [2, 4], [2, 5]], ans: 4 },
            { n: 6, edges: [[1, 2], [1, 3], [2, 4], [3, 5], [3, 6]], ans: 6 }
        ])(`${f.name}($n, $edges)`, ({ n, edges, ans }) => {
            expect(f(n, edges)).toBe(ans);
        });
    });
}

register(countPaths);

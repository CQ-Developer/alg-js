import { findSquare } from "./solution.ts";

function register(f: (matrix: number[][]) => number[]) {
    describe("max black square LCCI", () => {
        it.each([
            { matrix: [[1, 0, 1], [0, 0, 1], [0, 0, 1]], ans: [1, 0, 2] },
            { matrix: [[0, 1, 1], [1, 0, 1], [1, 1, 0]], ans: [0, 0, 1] }
        ])(`${f.name}($matrix)`, ({ matrix, ans }) => {
            expect(f(matrix)).toEqual(ans);
        });
    });
}

register(findSquare);

import { sortMatrixA, sortMatrixB } from "./solution.ts";

function register(f: (g: number[][]) => number[][]) {
    describe("sort matrix by diagonals", () => {
        it.each([
            { g: [[1, 7, 3], [9, 8, 2], [4, 5, 6]], a: [[8, 2, 3], [9, 6, 7], [4, 5, 1]] },
            { g: [[0, 1], [1, 2]], a: [[2, 1], [1, 0]] },
            { g: [[1]], a: [[1]] }
        ])(`${f.name}($g)`, ({ g, a }) => {
            expect(f(g)).toEqual(a);
        });
    });
}

register(sortMatrixA);
register(sortMatrixB);

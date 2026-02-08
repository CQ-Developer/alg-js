import { findDiagonalOrder } from "./solution.ts";

function register(f: (mat: number[][]) => number[]) {
    describe("diagonal traverse", () => {
        it.each([
            { mat: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], ans: [1, 2, 4, 7, 5, 3, 6, 8, 9] },
            { mat: [[1, 2], [3, 4]], ans: [1, 2, 3, 4] }
        ])(`${f.name}($mat)`, ({ mat, ans }) => {
            expect(f(mat)).toEqual(ans);
        });
    });
}

register(findDiagonalOrder);

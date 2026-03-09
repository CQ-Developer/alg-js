import { numSubmatricesSumTarget } from "./solution.ts";

function register(f: (matrix: number[][], target: number) => number) {
    describe("number of submatrices that sum to target", () => {
        it.each([
            { matrix: [[0, 1, 0], [1, 1, 1], [0, 1, 0]], target: 0, ans: 4 },
            { matrix: [[1, -1], [-1, 1]], target: 0, ans: 5 },
            { matrix: [[904]], target: 0, ans: 0 }
        ])(`${f.name}($matrix, $target) => $ans`, ({ matrix, target, ans }) => {
            expect(f(matrix, target)).toBe(ans);
        })
    });
}

register(numSubmatricesSumTarget);

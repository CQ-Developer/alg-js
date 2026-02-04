import { differenceOfDistinctValuesA, differenceOfDistinctValuesB } from "./solution.ts";

function register(f: (g: number[][]) => number[][]) {
    describe("difference of number of distinct values on diagonals", () => {
        it.each([
            { g: [[1, 2, 3], [3, 1, 5], [3, 2, 1]], a: [[1, 1, 0], [1, 0, 1], [0, 1, 1]] },
            { g: [[1]], a: [[0]] },
            { g: [[6, 28, 37, 34, 12, 30, 43, 35, 6], [21, 47, 38, 14, 31, 49, 11, 14, 49], [6, 12, 35, 17, 17, 2, 45, 27, 43], [34, 41, 30, 28, 45, 24, 50, 20, 4]], a: [[3, 3, 3, 3, 3, 3, 2, 1, 0], [2, 1, 1, 1, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1, 1, 1, 2], [0, 1, 2, 3, 3, 3, 3, 3, 3]] }
        ])(`${f.name}($g)`, ({ g, a }) => {
            expect(f(g)).toEqual(a);
        });
    });
}

register(differenceOfDistinctValuesA);
register(differenceOfDistinctValuesB);

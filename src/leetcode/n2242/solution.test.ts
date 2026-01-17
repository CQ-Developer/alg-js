import { maximumScore } from "./solution.ts";

function register(f: (s: number[], e: number[][]) => number) {
    describe("maximum score of a node sequence", () => {
        it.each([
            { s: [5, 2, 9, 8, 4], e: [[0, 1], [1, 2], [2, 3], [0, 2], [1, 3], [2, 4]], a: 24 },
            { s: [9, 20, 6, 4, 11, 12], e: [[0, 3], [5, 3], [2, 4], [1, 3]], a: -1 }
        ])(`${f.name}($s, $e)`, ({ s, e, a }) => {
            expect(f(s, e)).toBe(a);
        });
    });
}

register(maximumScore);

import { vowelStrings } from "./solution.ts";

function register(f: (w: string[], q: number[][]) => number[]) {
    describe("count vowel strings in ranges", () => {
        it.each([
            { w: ["aba", "bcb", "ece", "aa", "e"], q: [[0, 2], [1, 4], [1, 1]], a: [2, 3, 0] },
            { w: ["a", "e", "i"], q: [[0, 2], [0, 1], [2, 2]], a: [3, 2, 1] }
        ])(`${f.name}($w, $q)`, ({ w, q, a }) => {
            expect(f(w, q)).toEqual(a);
        });
    });
}

register(vowelStrings);

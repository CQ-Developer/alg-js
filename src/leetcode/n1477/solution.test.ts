import { minSumOfLengthsA, minSumOfLengthsB } from "./solution.ts";

function register(f: (arr: number[], target: number) => number) {
    describe("find two non-overlapping sub-arrays each with target sum", () => {
        it.each([
            { arr: [3, 2, 2, 4, 3], target: 3, ans: 2 },
            { arr: [7, 3, 4, 7], target: 7, ans: 2 },
            { arr: [4, 3, 2, 6, 2, 3, 4], target: 6, ans: -1 }
        ])(`${f.name}($arr, $target)`, ({ arr, target, ans }) => {
            expect(f(arr, target)).toBe(ans);
        });
    });
}

register(minSumOfLengthsA);
register(minSumOfLengthsB);

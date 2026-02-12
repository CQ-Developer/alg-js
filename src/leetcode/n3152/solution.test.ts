import { isArraySpecialA, isArraySpecialB } from "./solution.ts";

function register(f: (nums: number[], queries: number[][]) => boolean[]) {
    describe("special array II", () => {
        it.each([
            { nums: [3, 4, 1, 2, 6], queries: [[0, 4]], ans: [false] },
            { nums: [4, 3, 1, 6], queries: [[0, 2], [2, 3]], ans: [false, true] },
            { nums: [2, 1], queries: [[0, 1]], ans: [true] }
        ])(`${f.name}($nums, $queries)`, ({ nums, queries, ans }) => {
            expect(f(nums, queries)).toEqual(ans);
        });
    });
}

register(isArraySpecialA);
register(isArraySpecialB);

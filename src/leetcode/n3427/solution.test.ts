import { subarraySum } from "./solution.ts";

function register(f: (nums: number[]) => number) {
    describe("sum of variable length subarrays", () => {
        it.each([
            { nums: [2, 3, 1], sum: 11 },
            { nums: [3, 1, 1, 2], sum: 13 }
        ])(`${f.name}($nums)`, ({ nums, sum }) => {
            expect(f(nums)).toBe(sum);
        });
    });
}

register(subarraySum);

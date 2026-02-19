import { subarraysDivByK_1, subarraysDivByK_2 } from "./solution.ts";

function register(subarraysDivByK: (nums: number[], k: number) => number) {
    describe("subarray sums divisible by k", () => {
        it.each([
            { nums: [4, 5, 0, -2, -3, 1], k: 5, cnt: 7 },
            { nums: [5], k: 9, cnt: 0 }
        ])(`${subarraysDivByK.name}($nums, $k)`, ({ nums, k, cnt }) => {
            expect(subarraysDivByK(nums, k)).toBe(cnt);
        });
    });
}

register(subarraysDivByK_1);
register(subarraysDivByK_2);

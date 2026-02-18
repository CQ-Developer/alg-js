import { numSubarraysWithSumA, numSubarraysWithSumB } from "./solution.ts";

function register(f: (nums: number[], goal: number) => number) {
    describe("binary subarrays with sum", () => {
        it.each([
            { nums: [1, 0, 1, 0, 1], goal: 2, cnt: 4 },
            { nums: [0, 0, 0, 0, 0], goal: 0, cnt: 15 }
        ])(`${f.name}($nums, $goal)`, ({ nums, goal, cnt }) => {
            expect(f(nums, goal)).toBe(cnt);
        });
    })
}

register(numSubarraysWithSumA);
register(numSubarraysWithSumB);

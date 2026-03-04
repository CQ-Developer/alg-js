import { countInterestingSubarraysA, countInterestingSubarraysB } from "./solution.ts";

function register(f: (nums: number[], modulo: number, k: number) => number) {
    describe("count of interesting subarrays", () => {
        it.each([
            { nums: [3, 2, 4], modulo: 2, k: 1, ans: 3 },
            { nums: [3, 1, 9, 6], modulo: 3, k: 0, ans: 2 }
        ])(`${f.name}($nums, $modulo, $k) => $ans`, ({ nums, modulo, k, ans }) => {
            expect(f(nums, modulo, k)).toBe(ans);
        });
    });
}

register(countInterestingSubarraysA);
register(countInterestingSubarraysB);

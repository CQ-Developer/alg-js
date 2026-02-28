import { countSubarraysA, countSubarraysB } from "./solution.ts";

function register(f: (nums: number[], k: number) => number) {
    describe("count subarrays with median k", () => {
        it.each([
            { nums: [3, 2, 1, 4, 5], k: 4, ans: 3 },
            { nums: [2, 3, 1], k: 3, ans: 1 }
        ])(`${f.name}($nums, $k) => $ans`, ({ nums, k, ans }) => {
            expect(f(nums, k)).toBe(ans);
        });
    });
}

register(countSubarraysA);
register(countSubarraysB);

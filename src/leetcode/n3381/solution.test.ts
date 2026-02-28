import { maxSubarraySumA, maxSubarraySumB } from "./solution.ts";

function register(f: (nums: number[], k: number) => number) {
    describe("maximum subarray sum with length divisible by k", () => {
        it.each([
            { nums: [-1, -2, -3, -4, -5], k: 4, ans: -10 },
            { nums: [1, 2], k: 1, ans: 3 },
            { nums: [-5, 1, 2, -3, 4], k: 2, ans: 4 }
        ])(`${f.name}($nums, $k) => $ans`, ({ nums, k, ans }) => {
            expect(f(nums, k)).toBe(ans);
        });
    });
}

register(maxSubarraySumA);
register(maxSubarraySumB);

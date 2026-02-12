import { maxSubArrayA, maxSubArrayB, maxSubArrayC } from "./solution.ts";

function register(f: (nums: number[]) => number) {
    describe("maximum subarray", () => {
        it.each([
            { nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4], ans: 6 },
            { nums: [1], ans: 1 },
            { nums: [5, 4, -1, 7, 8], ans: 23 },
            { nums: [-1], ans: -1 }
        ])(`${f.name}($nums)`, ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(maxSubArrayA);
register(maxSubArrayB);
register(maxSubArrayC);

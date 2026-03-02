import { minSubarrayA, minSubarrayB } from "./solution.ts";

function register(f: (nums: number[], p: number) => number) {
    describe("make sum divisible by p", () => {
        it.each([
            { nums: [3, 1, 4, 2], p: 6, ans: 1 },
            { nums: [6, 3, 5, 2], p: 9, ans: 2 },
            { nums: [1000000000, 1000000000, 1000000000], p: 3, ans: 0 },
            { nums: [1, 1, 1], p: 2, ans: 1 },
            { nums: [1, 2, 3], p: 9, ans: -1 }
        ])(`${f.name}($nums, $p) => $ans`, ({ nums, p, ans }) => {
            expect(f(nums, p)).toBe(ans);
        });
    });
}

register(minSubarrayA);
register(minSubarrayB);

import { maxNonOverlapping } from "./solution.ts";


function register(f: (nums: number[], target: number) => number) {
    describe("maximum number of non-overlapping subarrays with sum equals target", () => {
        it.each([
            { nums: [1, 1, 1, 1, 1], target: 2, mx: 2 },
            { nums: [-1, 3, 5, 1, 4, 2, -9], target: 6, mx: 2 },
            { nums: [-5, 5, -4, 5, 4], target: 5, mx: 2 },
            { nums: [0, 0, 0], target: 0, mx: 3 }
        ])(`${f.name}($nums, $target) => $mx`, ({ nums, target, mx }) => {
            expect(f(nums, target)).toBe(mx);
        });
    });
}

register(maxNonOverlapping);

import { maximumSubarraySum } from "./solution.ts";

function register(f: (nums: number[], k: number) => number) {
    it.each([
        { nums: [-1, -2, -3, -4], k: 2, ans: -6 },
        { nums: [1, 2, 3, 4, 5, 6], k: 1, ans: 11 },
        { nums: [-1, 3, 2, 4, 5], k: 3, ans: 11 },
        { nums: [1, 5], k: 2, ans: 0 }
    ])(`${f.name}($nums, $k)`, ({ nums, k, ans }) => {
        expect(f(nums, k)).toBe(ans);
    });
}

register(maximumSubarraySum);

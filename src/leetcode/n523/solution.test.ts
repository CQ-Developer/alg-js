import { checkSubarraySum } from "./solution.ts";

function register(f: (nums: number[], k: number) => boolean) {
    describe("continuous subarray sum", () => {
        it.each([
            { nums: [23, 2, 4, 6, 7], k: 6, ans: true },
            { nums: [23, 2, 6, 4, 7], k: 6, ans: true },
            { nums: [23, 2, 6, 4, 7], k: 13, ans: false }
        ])(`${f.name}($nums, $k)`, ({ nums, k, ans }) => {
            expect(f(nums, k)).toBe(ans);
        });
    });
}

register(checkSubarraySum);

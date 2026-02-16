import { subarraySum } from "./solution.ts";

function register(f: (nums: number[], k: number) => number) {
    describe("subarray sum equals k", () => {
        it.each([
            { nums: [1, 1, 1], k: 2, cnt: 2 },
            { nums: [1, 2, 3], k: 3, cnt: 2 }
        ])(`${f.name}($nums, $k)`, ({ nums, k, cnt }) => {
            expect(f(nums, k)).toBe(cnt);
        });
    });
}

register(subarraySum);

import { countMajoritySubarraysA, countMajoritySubarraysB } from "./solution.ts";

function register(f: (nums: number[], target: number) => number) {
    describe("count subarrays with majority element II", () => {
        it.each([
            { nums: [1, 2, 2, 3], target: 2, cnt: 5 },
            { nums: [1, 1, 1, 1], target: 1, cnt: 10 },
            { nums: [1, 2, 3], target: 4, cnt: 0 }
        ])(`${f.name}($nums, $target)`, ({ nums, target, cnt }) => {
            expect(f(nums, target)).toBe(cnt);
        });
    });
}

register(countMajoritySubarraysA);
register(countMajoritySubarraysB);

import { maxAbsoluteSumA, maxAbsoluteSumB } from "./solution.ts";

function register(f: (nums: number[]) => number) {
    it.each([
        { nums: [1, -3, 2, 3, -4], ans: 5 },
        { nums: [2, -5, 1, -4, 3, -2], ans: 8 }
    ])(`${f.name}($nums)`, ({ nums, ans }) => {
        expect(f(nums)).toBe(ans);
    });
}

register(maxAbsoluteSumA);
register(maxAbsoluteSumB);

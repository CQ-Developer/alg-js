import { countQuadrupletsA, countQuadrupletsB } from "./solution.ts";

function register(f: (nums: number[]) => number) {
    describe("count increasing quadruplets", () => {
        it.each([
            { nums: [1, 3, 2, 4, 5], ans: 2 },
            { nums: [1, 2, 3, 4], ans: 0 }
        ])(`${f.name}($nums)`, ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(countQuadrupletsA);
register(countQuadrupletsB);

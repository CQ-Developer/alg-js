import { specialTriplets } from "./solution.ts"

function register(f: (nums: number[]) => number) {
    describe("Count Special Triplets", () => {
        it.each([
            { nums: [6, 3, 6], ans: 1 },
            { nums: [0, 1, 0, 0], ans: 1 },
            { nums: [8, 4, 2, 8, 4], ans: 2 }
        ])(`${f.name}($nums)`, ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(specialTriplets);

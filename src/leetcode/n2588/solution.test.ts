import { beautifulSubarrays } from "./solution.ts";

function register(f: (nums: number[]) => number) {
    describe("count the number of beautiful subarrays", () => {
        test("[4, 3, 1, 2, 4] => 2", () => {
            expect(f([4, 3, 1, 2, 4])).toBe(2);
        });
        test("[1, 10, 4] => 0", () => {
            expect(f([1, 10, 4])).toBe(0);
        });
    });
}

register(beautifulSubarrays);

import { numOfSubarraysA, numOfSubarraysB } from "./solution.ts";

function register(f: (arr: number[]) => number) {
    describe("number of subarrays with odd sum", () => {
        it.each([
            { arr: [1, 3, 5], cnt: 4 },
            { arr: [2, 4, 6], cnt: 0 },
            { arr: [1, 2, 3, 4, 5, 6, 7], cnt: 16 }
        ])(`${f.name}($arr)`, ({ arr, cnt }) => {
            expect(f(arr)).toBe(cnt);
        });
    });
}

register(numOfSubarraysA);
register(numOfSubarraysB);

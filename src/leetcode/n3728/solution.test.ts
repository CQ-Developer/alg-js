import { countStableSubarrays } from "./solution.ts";

function register(f: (capacity: number[]) => number) {
    describe("stable subarrays with equal boundary and interior sum", () => {
        it.each([
            { capacity: [9, 3, 3, 3, 9], cnt: 2 },
            { capacity: [1, 2, 3, 4, 5], cnt: 0 },
            { capacity: [-4, 4, 0, 0, -8, -4], cnt: 1 }
        ])(`${f.name}($capacity) => $cnt`, ({ capacity, cnt }) => {
            expect(f(capacity)).toBe(cnt);
        });
    });
}

register(countStableSubarrays);

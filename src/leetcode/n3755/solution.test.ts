import { maxBalancedSubarray } from "./solution.ts";

function register(f: (nums: number[]) => number) {
    it.each([
        { x: [3, 2, 8, 5, 4, 14, 9, 15], y: 8 },
        { x: [3, 1, 3, 2, 0], y: 4 },
        { x: [4, 1, 2, 3, 2, 2, 0, 4, 2, 3, 4], y: 0 }
    ])(`${f.name}($x)`, ({ x, y }) => {
        expect(f(x)).toBe(y);
    });
}

register(maxBalancedSubarray);

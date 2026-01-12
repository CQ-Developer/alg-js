import { numberOfBoomerangs } from "./solution.ts";

function register(f: (points: number[][]) => number) {
    it.each([
        { points: [[0, 0], [1, 0], [2, 0]], ans: 2 },
        { points: [[1, 1], [2, 2], [3, 3]], ans: 2 },
        { points: [[1, 1]], ans: 0 }
    ])(`${f.name}($points)`, ({ points, ans }) => {
        expect(f(points)).toBe(ans);
    });
}

register(numberOfBoomerangs);

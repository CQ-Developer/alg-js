import { numberOfRightTriangles } from "./solution.ts";

function register(f: (grid: number[][]) => number) {
    describe("right triangles", () => {
        it.each([
            { grid: [[0, 1, 0], [0, 1, 1], [0, 1, 0]], ans: 2 },
            { grid: [[1, 0, 0, 0], [0, 1, 0, 1], [1, 0, 0, 0]], ans: 0 },
            { grid: [[1, 0, 1], [1, 0, 0], [1, 0, 0]], ans: 2 }
        ])(`${f.name}(grid)`, ({ grid, ans }) => {
            expect(f(grid)).toBe(ans);
        });
    });
}

register(numberOfRightTriangles);

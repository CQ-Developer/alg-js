import { maximuimValueSum } from "./solution.ts";

function register(f: (board: number[][]) => number) {
    describe("maximum value sum by placing three rooks II", () => {
        it.each([
            { board: [[-3, 1, 1, 1], [-3, 1, -3, 1], [-3, 2, 1, 1]], mx: 4 },
            { board: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], mx: 15 },
            { board: [[1, 1, 1], [1, 1, 1], [1, 1, 1]], mx: 3 }
        ])(`${f.name}($board)`, ({ board, mx }) => {
            expect(f(board)).toBe(mx);
        });
    });
}

register(maximuimValueSum);

import { longestWPI_A, longestWPI_B, longestWPI_C } from "./solution.ts";

function register(f: (hours: number[]) => number) {
    describe("longest well-performing inerval", () => {
        it.each([
            { hours: [9, 9, 6, 0, 6, 6, 9], ans: 3 },
            { hours: [6, 6, 6], ans: 0 },
            { hours: [8, 10, 6, 16, 5], ans: 3 }
        ])(`${f.name}($hours) == $ans`, ({ hours, ans }) => {
            expect(f(hours)).toBe(ans);
        });
    });
}

register(longestWPI_A);
register(longestWPI_B);
register(longestWPI_C);

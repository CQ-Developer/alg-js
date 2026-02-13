import { maxProfitA, maxProfitB } from "./solution.ts";

function register(f: (prices: number[], strategy: number[], k: number) => number) {
    describe("best time to buy and sell stock using strategy", () => {
        it.each([
            { p: [4, 2, 8], s: [-1, 0, 1], k: 2, x: 10 },
            { p: [5, 4, 3], s: [1, 1, 0], k: 2, x: 9 }
        ])(`${f.name}($p, $s, $k)`, ({ p, s, k, x }) => {
            expect(f(p, s, k)).toBe(x);
        });
    });
}

register(maxProfitA);
register(maxProfitB);

import { countGoodTripletsA, countGoodTripletsB, countGoodTripletsC } from "./solution.ts";

function register(f: (arr: number[], a: number, b: number, c: number) => number) {
    describe("count good triplets", () => {
        it.each([
            { arr: [3, 0, 1, 1, 9, 7], a: 7, b: 2, c: 3, ans: 4 },
            { arr: [1, 1, 2, 2, 3], a: 0, b: 0, c: 1, ans: 0 }
        ])(`${f.name}($arr, $a, $b, $c)`, ({ arr, a, b, c, ans }) => {
            expect(f(arr, a, b, c)).toBe(ans);
        });
    });
}

register(countGoodTripletsA);
register(countGoodTripletsB);
register(countGoodTripletsC);

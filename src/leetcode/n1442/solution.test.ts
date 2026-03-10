import { countTripletsA, countTripletsB, countTripletsC } from "./solution.ts";

function register(f: (arr: number[]) => number) {
    describe("count triplets that can form two arrays of equal xor", () => {
        it.each([
            { arr: [2, 3, 1, 6, 7], ans: 4 },
            { arr: [1, 1, 1, 1, 1], ans: 10 }
        ])(`${f.name}($arr) => $ans`, ({ arr, ans }) => {
            expect(f(arr)).toBe(ans);
        });
    });
}

register(countTripletsA);
register(countTripletsB);
register(countTripletsC);
register(countTripletsB);

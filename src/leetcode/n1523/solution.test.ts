import { countOddsA, countOddsB } from "./solution.ts";

function register(f: (lo: number, hi: number) => number) {
    it.each([
        { lo: 3, hi: 7, cnt: 3 },
        { lo: 8, hi: 10, cnt: 1 }
    ])(`${f.name}($lo $hi)`, ({ lo, hi, cnt }) => {
        expect(f(lo, hi)).toBe(cnt);
    })
}

register(countOddsA);
register(countOddsB);

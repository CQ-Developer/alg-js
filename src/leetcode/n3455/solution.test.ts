import { shortestMatchingSubstring } from "./solution.ts";

function register(f: (s: string, p: string) => number) {
    describe("shortest matching substring", () => {
        it.each([
            { s: "abaacbaecebce", p: "ba*c*ce", a: 8 },
            { s: "baccbaadbc", p: "cc*baa*adb", a: -1 },
            { s: "a", p: "**", a: 0 }
        ])(`${f.name}($s, $p)`, ({ s, p, a }) => {
            expect(f(s, p)).toBe(a);
        });
    });
}

register(shortestMatchingSubstring);

import { countPalindromicSubsequenceA, countPalindromicSubsequenceB, countPalindromicSubsequenceC } from "./solution.ts";

function register(f: (s: string) => number) {
    describe("Unique Length-3 Palindromic Subsequences", () => {
        it.each([
            { s: "aabca", ans: 3 },
            { s: "adc", ans: 0 },
            { s: "bbcbaba", ans: 4 },
        ])(`${f.name}(s)`, ({ s, ans }) => {
            expect(f(s)).toBe(ans);
        });
    });
}

register(countPalindromicSubsequenceA);
register(countPalindromicSubsequenceB);
register(countPalindromicSubsequenceC);

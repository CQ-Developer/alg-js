import { strStr } from "./solution.ts";

function register(f: (s: string, p: string) => number) {
    describe("find the index of the first occurrence in a string", () => {
        it.each([
            { s: "sadbutsad", p: "sad", i: 0 },
            { s: "leetcode", p: "leeto", i: -1 }
        ])(`${f.name}($s, $p)`, ({ s, p, i }) => {
            expect(f(s, p)).toBe(i);
        });
    });
}

register(strStr);

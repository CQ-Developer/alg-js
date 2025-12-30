import { longestBalanced } from './solution.ts';

function register(f: (s: string) => number) {
    describe('Longest Balanced Substring II', () => {
        it.each([
            { s: "abbac", ans: 4 },
            { s: "aabcc", ans: 3 },
            { s: "aba", ans: 2 }
        ])(f.name + '("$s")', ({ s, ans }) => {
            expect(f(s)).toBe(ans);
        });
    });
}

register(longestBalanced);

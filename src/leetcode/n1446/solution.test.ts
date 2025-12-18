import { maxPower } from './solution.ts';

function register(f: (s: string) => number) {
    describe('consecutive characters', () => {
        it.each([
            { s: 'leetcode', ans: 2 },
            { s: 'abbcccddddeeeeedcba', ans: 5 }
        ])(f.name + '($s)', ({ s, ans }) => {
            expect(f(s)).toBe(ans);
        });
    });
}

register(maxPower);

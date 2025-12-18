import { longestBalancedA } from './solution.ts';

type fun = (s: string) => number;

function register(f: fun) {
    describe('Longest Balance Substring I', () => {
        it.each([
            { s: 'abbac', longest: 4 },
            { s: 'zzabccy', longest: 4 },
            { s: 'aba', longest: 2 }
        ])(f.name + '($s)', ({ s, longest }) => {
            expect(f(s)).toBe(longest);
        });
    });
}

register(longestBalancedA);

import { fourSumCount, fourSumCountA } from './solution.ts';

function register(f: fourSumCount) {
    describe('4 Sum II', () => {
        it.each([
            { a: [1, 2], b: [-2, -1], c: [-1, 2], d: [0, 2], ans: 2 },
            { a: [0], b: [0], c: [0], d: [0], ans: 1 }
        ])(f.name + '($a, $b, $c, $d)', ({ a, b, c, d, ans }) => {
            expect(f(a, b, c, d)).toBe(ans);
        });
    });
}

register(fourSumCountA);

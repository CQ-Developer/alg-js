import { findMaxLengthA, findMaxLengthB } from './solution.ts';

function register(f: (nums: number[]) => number) {
    describe('contiguous array', () => {
        it.each([
            { nums: [0, 1], ans: 2 },
            { nums: [0, 1, 0], ans: 2 },
            { nums: [0, 1, 1, 1, 1, 1, 0, 0, 0], ans: 6 }
        ])(f.name + '($nums)', ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(findMaxLengthA);
register(findMaxLengthB);

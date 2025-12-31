import { minimumSum } from './solution.ts';

function register(f: (nums: number[]) => number) {
    describe('Minimum Sum of Mountain Triplets II', () => {
        it.each([
            { nums: [8, 6, 1, 5, 3], ans: 9 },
            { nums: [5, 4, 8, 7, 10, 2], ans: 13 },
            { nums: [6, 5, 4, 3, 4, 5], ans: -1 }
        ])(`${f.name}($nums)`, ({ nums, ans }) => {
            expect(f(nums)).toBe(ans);
        });
    });
}

register(minimumSum);

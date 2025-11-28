import { Solution, SolutionA } from './solution.ts';

function register(Code: new () => Solution) {
    describe('1673. find the most competitive subsequence', () => {
        let code: Solution;

        beforeEach(() => code = new Code());

        it.each([
            { nums: [3, 5, 2, 6], k: 2, expected: [2, 6] },
            { nums: [2, 4, 3, 3, 5, 4, 9, 6], k: 4, expected: [2, 3, 3, 4] }
        ])(Code.name + '.mostCompetitive($nums, $k) => $expected', ({ nums, k, expected }) => {
            expect(code.mostCompetitive(nums, k)).toEqual(expected);
        });
    });
}

register(SolutionA);

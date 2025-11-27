import { Solution, SolutionA } from './solution.ts';

function register(Code: { new(): Solution }) {
    describe('402. remove k digits', () => {
        let solution: Solution;

        beforeEach(() => solution = new Code());

        it.each([
            { num: '1432219', k: 3, expected: '1219' },
            { num: '10200', k: 1, expected: '200' },
            { num: '10', k: 2, expected: '0' }
        ])(Code.name + '.removeKdigits($num, $k) => $expected', ({ num, k, expected }) => {
            expect(solution.removeKdigits(num, k)).toBe(expected);
        })
    });
}

register(SolutionA);

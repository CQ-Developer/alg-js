import { Solution, SolutionA } from './solution.ts';

function register(Code: new () => Solution) {
    describe('316. remove duplicate letters', () => {
        let code: Solution;

        beforeEach(() => code = new Code());

        it.each([
            { s: 'bcabc', ans: 'abc' },
            { s: 'cbacdcbc', ans: 'acdb' }
        ])(Code.name + '.removeDuplicateLetters($s)', ({ s, ans }) => {
            expect(code.removeDuplicateLetters(s)).toBe(ans);
        });
    });
}

register(SolutionA);

const { Solution, SolutionA, SolutionB } = require('../../../src/leetcode/n1124/solution');


/**
 * @param {Solution} Solution
 */
function register(Solution) {
    describe('1124. Longest Well-Performing Interval', () => {
        /**
         * @type {Solution}
         */
        let solution;

        beforeEach(() => {
            solution = new Solution();
        });

        it.each([
            { hours: [9, 9, 6, 0, 6, 6, 9], ans: 3 },
            { hours: [6, 6, 6], ans: 0 }
        ])('longestWPI($hours) == $ans', ({ hours, ans }) => {
            expect(solution.longestWPI(hours)).toBe(ans);
        });
    });
}

register(SolutionA);
register(SolutionB);

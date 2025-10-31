const { Solution, SolutionA, SolutionB, SolutionC } = require('../../../src/leetcode/n84/solution');


/**
 * @param {typeof Solution} Solution
 */
function register(Solution) {
    describe('84. largest rectangle in histogram', () => {
        /**
         * @type {Solution}
         */
        let solution;

        beforeEach(() => {
            solution = new Solution();
        });

        it.each([
            { heights: [2, 1, 5, 6, 2, 3], ans: 10 },
            { heights: [2, 4], ans: 4 }
        ])(`${Solution.name}.largestRectangleArea($heights) == $ans`, ({ heights, ans }) => {
            expect(solution.largestRectangleArea(heights)).toBe(ans);
        });
    });
}

register(SolutionA);
register(SolutionB);
register(SolutionC);

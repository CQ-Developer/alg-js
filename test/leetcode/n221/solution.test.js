const { Solution, SolutionA, SolutionB, SolutionC } = require('../../../src/leetcode/n221/solution');

/**
 * @param {typeof Solution} Solution
 */
function register(Solution) {
    describe('221. Maximal Square', () => {

        /**
         * @type {Solution}
         */
        let solution;

        beforeEach(() => {
            solution = new Solution();
        });

        it.each([
            { matrix: [['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']], area: 4 },
            { matrix: [['0', '1'], ['1', '0']], area: 1 },
            { matrix: [['0']], area: 0 }
        ])(`${Solution.name}.maximalSquare($matrix)`, ({ matrix, area }) => {
            expect(solution.maximalSquare(matrix)).toBe(area);
        });
    });
}

register(SolutionA);
register(SolutionB);
register(SolutionC);

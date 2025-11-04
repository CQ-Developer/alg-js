const { Solution, SolutionA } = require('../../../src/leetcode/n85/solution');

/**
 * @param {typeof Solution} Solution
 */
function register(Solution) {
    describe('85. Maximal Rectangle', () => {
        /**
         * @type {Solution}
         */
        let solution;

        beforeEach(() => {
            solution = new Solution();
        });

        it.each([
            { matrix: [['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']], max: 6 },
            { matrix: [['0']], max: 0 },
            { matrix: [['1']], max: 1 }
        ])(`${Solution.name}.maximalRectangle($matrix)`, ({ matrix, max }) => {
            expect(solution.maximalRectangle(matrix)).toBe(max);
        });
    });
}

register(SolutionA);

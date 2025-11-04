const { Solution, SolutionA, SolutionB } = require('../../../src/leetcode/n1793/solution');


/**
 * @param {typeof Solution} Solution 
 */
function register(Solution) {
    describe('1793. maximum score of a good subarray', () => {
        /** @type {Solution} */
        let solution;

        beforeEach(() => {
            solution = new Solution();
        });

        it.each([
            { nums: [1, 4, 3, 7, 4, 5], k: 3, ans: 15 },
            { nums: [5, 5, 4, 5, 4, 1, 1, 1], k: 0, ans: 20 }
        ])(`${Solution.name}.maximumScore($nums, $k)`, ({ nums, k, ans }) => {
            expect(solution.maximumScore(nums, k)).toBe(ans);
        });
    });
}

register(SolutionA);
register(SolutionB);

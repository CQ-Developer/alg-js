const { seePeople } = require('../../../src/leetcode/n2282/solution');


/**
 * @param {function(number[][]): number[][]} f
 */
function register(f) {
    describe('2282. Number of People That Can Be Seen in a Grid', () => {
        it.each([
            { heights: [[3, 1, 4, 2, 5]], ans: [[2, 1, 2, 1, 0]] },
            { heights: [[5, 1], [3, 1], [4, 1]], ans: [[3, 1], [2, 1], [1, 0]] }
        ])(`${f.name}($heights)`, ({ heights, ans }) => {
            expect(f(heights)).toEqual(ans);
        });
    });
}

register(seePeople);

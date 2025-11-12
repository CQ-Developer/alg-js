const { pourWater } = require('../../../src/leetcode/n755/solution');

/**
 * @param {function(number[], number, number): number[]} f
 */
function register(f) {
    describe('755. pour water', () => {
        it.each([
            { heights: [2, 1, 1, 2, 1, 2, 2], volume: 4, k: 3, ans: [2, 2, 2, 3, 2, 2, 2] },
            { heights: [1, 2, 3, 4], volume: 2, k: 2, ans: [2, 3, 3, 4] },
            { heights: [3, 1, 3], volume: 5, k: 1, ans: [4, 4, 4] }
        ])(f.name, ({ heights, volume, k, ans }) => {
            expect(f(heights, volume, k)).toEqual(ans);
        });
    });
}

register(pourWater);

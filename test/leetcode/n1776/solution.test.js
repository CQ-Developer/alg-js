const { getCollisionTimes } = require('../../../src/leetcode/n1776/solution');

/**
 * @param {Function} f
 */
function testTemplate(f) {
    describe(f.name, () => {
        it('testA', () => expect(f([[1, 2], [2, 1], [4, 3], [7, 2]])).toEqual([1.0, -1.0, 3.0, -1.0]));
        it('testB', () => expect(f([[3, 4], [5, 4], [6, 3], [9, 1]])).toEqual([2.0, 1.0, 1.5, -1.0]));
    });
}

testTemplate(getCollisionTimes);

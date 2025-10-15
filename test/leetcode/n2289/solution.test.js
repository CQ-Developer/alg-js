const { totalStepsA, totalStepsB } = require('../../../src/leetcode/n2289/solution');

/**
 * @param {Function} f
 */
function testTemplate(f) {
    describe(f.name, () => {
        it('testA', () => expect(f([5, 3, 4, 4, 7, 3, 6, 11, 8, 5, 11])).toBe(3));
        it('testB', () => expect(f([4, 5, 7, 7, 13])).toBe(0));
    });
}

testTemplate(totalStepsA);
testTemplate(totalStepsB);

const minimumSize = require('../../../src/leetcode/n1760/solution');

test('test_1', () => {
    expect(minimumSize([9], 2)).toBe(3);
});

test('test_2', () => {
    expect(minimumSize([2, 4, 8, 2], 4)).toBe(2);
});

test('test_3', () => {
    expect(minimumSize([7, 17], 2)).toBe(7);
});

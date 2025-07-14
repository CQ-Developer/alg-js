const { minimumEffortPathA, minimumEffortPathB, minimumEffortPathC } = require('../../../src/leetcode/n1631/solution.js')


test('test_1', () => {
    const heights = [[1, 2, 2], [3, 8, 2], [5, 3, 5]];
    expect(minimumEffortPathA(heights)).toBe(2);
    expect(minimumEffortPathB(heights)).toBe(2);
    expect(minimumEffortPathC(heights)).toBe(2);
});

test('test_2', () => {
    const heights = [[1, 2, 3], [3, 8, 4], [5, 3, 5]];
    expect(minimumEffortPathA(heights)).toBe(1);
    expect(minimumEffortPathB(heights)).toBe(1);
    expect(minimumEffortPathC(heights)).toBe(1);
});

test('test_3', () => {
    const heights = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]];
    expect(minimumEffortPathA(heights)).toBe(0);
    expect(minimumEffortPathB(heights)).toBe(0);
    expect(minimumEffortPathC(heights)).toBe(0);
});

test('test_4', () => {
    const heights = [[8, 3, 2, 5, 2, 10, 7, 1, 8, 9], [1, 4, 9, 1, 10, 2, 4, 10, 3, 5], [4, 10, 10, 3, 6, 1, 3, 9, 8, 8], [4, 4, 6, 10, 10, 10, 2, 10, 8, 8], [9, 10, 2, 4, 1, 2, 2, 6, 5, 7], [2, 9, 2, 6, 1, 4, 7, 6, 10, 9], [8, 8, 2, 10, 8, 2, 3, 9, 5, 3], [2, 10, 9, 3, 5, 1, 7, 4, 5, 6], [2, 3, 9, 2, 5, 10, 2, 7, 1, 8], [9, 10, 4, 10, 7, 4, 9, 3, 1, 6]];
    expect(minimumEffortPathA(heights)).toBe(5);
    expect(minimumEffortPathB(heights)).toBe(5);
    expect(minimumEffortPathC(heights)).toBe(5);
});

test('test_5', () => {
    const heights = [[2, 3, 6, 3, 6, 6, 1, 2], [4, 5, 6, 5, 5, 10, 1, 2], [9, 1, 4, 10, 4, 7, 7, 3]];
    expect(minimumEffortPathA(heights)).toBe(4);
    expect(minimumEffortPathB(heights)).toBe(4);
    expect(minimumEffortPathC(heights)).toBe(4);
});

test('test_6', () => {
    const heights = [[1, 5, 5, 9, 10, 10, 1, 7], [3, 5, 6, 6, 9, 9, 4, 8], [10, 5, 10, 9, 2, 2, 8, 6], [3, 9, 5, 3, 6, 8, 6, 5]];
    expect(minimumEffortPathA(heights)).toBe(4);
    expect(minimumEffortPathB(heights)).toBe(4);
    expect(minimumEffortPathC(heights)).toBe(4);
});

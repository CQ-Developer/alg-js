const { minimizeArrayValueA, minimizeArrayValueB } = require('src/leetcode/n2439/solution');

test('test_1', () => {
    expect(minimizeArrayValueA([3, 7, 1, 6])).toBe(5);
    expect(minimizeArrayValueB([3, 7, 1, 6])).toBe(5);
});

test('test_2', () => {
    expect(minimizeArrayValueA([10, 1])).toBe(10);
    expect(minimizeArrayValueB([10, 1])).toBe(10);
});

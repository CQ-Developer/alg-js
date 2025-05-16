const minimizeArrayValue = require('src/leetcode/n2439/solution');

test('test_1', () => expect(minimizeArrayValue([3, 7, 1, 6])).toBe(5));
test('test_2', () => expect(minimizeArrayValue([10, 1])).toBe(10));

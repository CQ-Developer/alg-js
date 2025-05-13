const minimizedMaximum = require('src/leetcode/n2064/solution');

test('test_1', () => expect(minimizedMaximum(6, [11, 6])).toBe(3));
test('test_2', () => expect(minimizedMaximum(7, [15, 10, 10])).toBe(5));
test('test_3', () => expect(minimizedMaximum(1, [100000])).toBe(100000));

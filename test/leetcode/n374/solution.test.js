const { guessNumber } = require('src/leetcode/n374/solution');

test('test_1', () => {
    const guess = (x) => x == 6 ? 0 : x > 6 ? -1 : 1;
    expect(guessNumber(10, guess)).toBe(6);
}, 3000);

test('test_2', () => {
    const guess = (x) => x == 1 ? 0 : x > 1 ? -1 : 1;
    expect(guessNumber(1, guess)).toBe(1);
}, 3000);

test('test_3', () => {
    const guess = (x) => x == 1 ? 0 : x > 1 ? -1 : 1;
    expect(guessNumber(2, guess)).toBe(1);
}, 3000);

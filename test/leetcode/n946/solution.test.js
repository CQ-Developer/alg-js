const { validateStackSequences } = require('../../../src/leetcode/n946/solution');

test.each([
    { pushed: [1, 2, 3, 4, 5], popped: [4, 5, 3, 2, 1], result: true },
    { pushed: [1, 2, 3, 4, 5], popped: [4, 3, 5, 1, 2], result: false }
])('validateStackSequences($pushed, $popped)', ({ pushed, popped, result }) => {
    expect(validateStackSequences(pushed, popped)).toBe(result);
});

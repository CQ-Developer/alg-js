const { maxChunksToSortedA, maxChunksToSortedB } = require('../../../src/leetcode/n768/solution');

const f = test.each([
    { input: [5, 4, 3, 2, 1], output: 1 },
    { input: [2, 1, 3, 4, 4], output: 4 }
]);

f('maxChunksToSortedA($input)', ({ input, output }) => {
    expect(maxChunksToSortedA(input)).toBe(output);
});

f('maxChunksToSortedB($input)', ({ input, output }) => {
    expect(maxChunksToSortedB(input)).toBe(output);
});

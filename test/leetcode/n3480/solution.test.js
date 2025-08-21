const {
    maxSubarrays,
    maxSubarraysA,
    maxSubarraysB,
    maxSubarraysC
} = require('../../../src/leetcode/n3480/solution');

const f = test.each([
    {
        n: 4,
        conflictingPairs: [[2, 3], [1, 4]],
        result: 9
    },
    {
        n: 5,
        conflictingPairs: [[1, 2], [2, 5], [3, 5]],
        result: 12
    }
]);

f('maxSubarrays($n, $conflictingPairs)', ({ n, conflictingPairs }) => {
    expect(() => maxSubarrays(n, conflictingPairs)).toThrow('skip');
});

f('maxSubarraysA($n, $conflictingPairs)', ({ n, conflictingPairs, result }) => {
    expect(maxSubarraysA(n, conflictingPairs)).toBe(result);
});

f('maxSubarraysB($n, $conflictingPairs)', ({ n, conflictingPairs, result }) => {
    expect(maxSubarraysB(n, conflictingPairs)).toBe(result);
});

f('maxSubarraysC($n, $conflictingPairs)', ({ n, conflictingPairs, result }) => {
    expect(maxSubarraysC(n, conflictingPairs)).toBe(result);
});

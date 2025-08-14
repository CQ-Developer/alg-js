const { countQuadrupletsA, countQuadrupletsB, countQuadrupletsC } = require('../../../src/leetcode/n1995/solution');

const f = test.each([
    { nums: [1, 2, 3, 6], result: 1 },
    { nums: [3, 3, 6, 4, 5], result: 0 },
    { nums: [1, 1, 1, 3, 5], result: 4 }
]);

f('countQuadrupletsA($nums)', ({ nums, result }) => {
    expect(countQuadrupletsA(nums)).toBe(result);
});

f('countQuadrupletsB($nums)', ({ nums, result }) => {
    expect(countQuadrupletsB(nums)).toBe(result);
});

f('countQuadrupletsC($nums)', ({ nums, result }) => {
    expect(countQuadrupletsC(nums)).toBe(result);
});

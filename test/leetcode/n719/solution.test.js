const { smallestDistancePair } = require('src/leetcode/n719/solution');

const cases = [
    { nums: [1, 3, 1], k: 1, ans: 0 },
    { nums: [1, 1, 1], k: 2, ans: 0 },
    { nums: [1, 6, 1], k: 3, ans: 5 }
];

const f = test.each(cases);

f('smallestDistancePair($nums, $k)', ({ nums, k, ans }) => {
    expect(smallestDistancePair(nums, k)).toBe(ans);
});

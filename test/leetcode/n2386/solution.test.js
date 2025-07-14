const { kSum, kSumA, kSumB } = require('../../../src/leetcode/n2386/solution');

const data = [
    { nums: [2, 4, -2], k: 5, ans: 2 },
    { nums: [1, -2, 3, 4, -10, 12], k: 16, ans: 10 },
    { nums: [-487322177, -656480132, 850198596, -291605661, -272668395, 110865952, -162529283, -145886963, 202657909, 125667049, -282090943, 120877054, -85849348, -482630078, -802177895, -574862206, 374637017, 804297842], k: 1707, ans: 1493582115 },
];

const f = test.each(data);

f('kSum($nums, $k)', ({ nums, k }) => expect(() => kSum(Array.from(nums), k)).toThrow('skip'));

f('kSumA($nums, $k)', ({ nums, k, ans }) => expect(kSumA(Array.from(nums), k)).toBe(ans));

f('kSumB($nums, $k)', ({ nums, k, ans }) => expect(kSumB(Array.from(nums), k)).toBe(ans));

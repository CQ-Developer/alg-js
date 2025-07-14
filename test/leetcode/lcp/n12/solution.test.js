const { minTime, minTimeA } = require('../../../../src/leetcode/lcp/n12/solution')

const data = [
    { time: [1, 2, 3, 3], m: 2, result: 3 },
    { time: [999, 999, 999], m: 4, result: 0 }
];

const f = test.each(data);

f('minTime($time, $m)', ({ time, m }) => {
    expect(() => minTime(time, m)).toThrow();
});

f('minTimeA($time, $m)', ({ time, m, result }) => {
    expect(minTimeA(time, m)).toBe(result);
});

const { maxDistance } = require('src/leetcode/n1552/solution');

const data = [
    { position: [1, 2, 3, 4, 7], m: 3, result: 3 },
    { position: [5, 4, 3, 2, 1, 1000000000], m: 2, result: 999999999 }
];

const f = test.each(data);

f('maxDistance($position, $m)', ({ position, m }) => {
    expect(() => maxDistance(position, m)).toThrow();
});

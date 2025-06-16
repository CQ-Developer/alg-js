const { preimageSizeFZF } = require('src/leetcode/n793/solution');

const data = [
    { k: 0, ans: 5 },
    { k: 5, ans: 0 },
    { k: 3, ans: 5 }
];

const f = test.each(data);

f('preimageSizeFZF($k)', ({ k, ans }) => {
    expect(preimageSizeFZF(k)).toBe(ans);
});

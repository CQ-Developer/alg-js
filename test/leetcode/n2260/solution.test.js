const {minimumCardPickupA, minimumCardPickupB} = require('../../../src/leetcode/n2260/solution');

const f = test.each([
    {cards: [3, 4, 2, 3, 4, 7], result: 4},
    {cards: [1, 0, 5, 3], result: -1}
]);

f('minimumCardPickupA($cards)', ({cards, result}) => {
    expect(minimumCardPickupA(cards)).toBe(result);
});

f('minimumCardPickupB($cards)', ({cards, result}) => {
    expect(minimumCardPickupB(cards)).toBe(result);
});

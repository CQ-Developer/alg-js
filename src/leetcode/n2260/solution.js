/**
 * @param {number[]} cards
 * @returns {number}
 */
function minimumCardPickupA(cards) {
    const map = new Map();
    let res = Infinity;
    for (let i = 0; i < cards.length; i++) {
        const x = cards[i];
        if (map.has(x)) {
            res = Math.min(res, i - map.get(x) + 1);
        }
        map.set(x, i);
    }
    return res == Infinity ? -1 : res;
}

/**
 * @param {number[]} cards
 * @returns {number}
 */
function minimumCardPickupB(cards) {
    const set = new Set();
    let res = Infinity;
    for (let [l, r] = [0, 0]; r < cards.length; r++) {
        for (; set.has(cards[r]); l++) {
            res = Math.min(res, r - l + 1);
            set.delete(cards[l]);
        }
        set.add(cards[r]);
    }
    return res == Infinity ? -1 : res;
}

module.exports = {minimumCardPickupA, minimumCardPickupB};

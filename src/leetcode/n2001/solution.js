/**
 * @param {number[][]} rectangles
 * @returns {number}
 */
function interchangeableRectangles(rectangles) {
    let result = 0;
    const hash = new Map();
    for (const rec of rectangles) {
        const k = rec[0] / rec[1];
        const cnt = hash.get(k) ?? 0;
        result += cnt;
        hash.set(k, cnt + 1);
    }
    return result;
}

module.exports = { interchangeableRectangles };

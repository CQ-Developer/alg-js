/**
 * @param {number[]} heights
 * @param {number} volume
 * @param {number} k
 * @returns {number}
 */
function pourWater(heights, volume, k) {
    const n = heights.length;
    for (let v = 0; v < volume; v++) {
        let find = false;
        for (const d of [-1, 1]) {
            let j = k;
            for (let i = k; 0 <= i + d && i + d < n && heights[i + d] <= heights[i]; i += d) {
                if (heights[i + d] < heights[i]) {
                    j = i + d;
                }
            }
            if (j != k) {
                heights[j]++;
                find = true;
                break;
            }
        }
        if (!find) {
            heights[k]++;
        }
    }
    return heights;
}

module.exports = { pourWater };

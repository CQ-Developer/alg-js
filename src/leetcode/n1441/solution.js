/**
 * @abstract
 * @param {number[]} target
 * @param {number} n
 * @returns {string[]}
 */
function buildArray(target, n) {
    throw new Error('skip');
}

/**
 * @param {number[]} target
 * @param {number} n
 * @returns {string[]}
 */
function buildArrayA(target, n) {
    const seq = [];
    let [x, s, i] = [1, 0, 0];
    while (i < target.length) {
        if (s == 0) {
            seq.push('Push');
            s = x++;
            if (s == target[i]) {
                i++;
            }
        } else {
            if (x == target[i]) {
                if (i > 0 && s == target[i - 1]) {
                    seq.push('Push');
                    s = x++;
                    i++;
                } else {
                    seq.push('Pop');
                    s--;
                }
            } else {
                seq.push('Push');
                s = x++;
            }
        }
    }
    return seq;
}

/**
 * @param {number[]} target
 * @param {number} n
 * @returns {string[]}
 */
function buildArrayB(target, n) {
    let p = 0;
    const seq = [];
    for (const x of target) {
        for (; p < x - 1; p++) {
            seq.push('Push', 'Pop');
        }
        seq.push('Push');
        p = x;
    }
    return seq;
}

module.exports = { buildArray, buildArrayA, buildArrayB };

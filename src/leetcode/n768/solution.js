/**
 * @param {number[]} arr
 * @returns {number}
 */
function maxChunksToSortedA(arr) {
    const brr = arr.toSorted((a, b) => a - b);
    const map = new Map();
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        const [x, y] = [arr[i], brr[i]];
        if (map.set(x, (map.get(x) ?? 0) + 1).get(x) == 0) {
            map.delete(x);
        }
        if (map.set(y, (map.get(y) ?? 0) - 1).get(y) == 0) {
            map.delete(y);
        }
        if (map.size == 0) {
            cnt++;
        }
    }
    return cnt;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function maxChunksToSortedB(arr) {
    const stack = [];
    for (const x of arr) {
        if (!stack.length || x >= stack[stack.length - 1]) {
            stack.push(x);
        } else {
            const y = stack.pop();
            while (stack.length && stack[stack.length - 1] > x) {
                stack.pop();
            }
            stack.push(y);
        }
    }
    return stack.length;
}

module.exports = { maxChunksToSortedA, maxChunksToSortedB };

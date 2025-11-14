/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumSubarrayMinsA(arr) {
    const n = arr.length;
    // left
    let stk = [-1];
    const left = Array.from({ length: n }, () => { return 0; });
    for (let i = 0; i < n; i++) {
        while (left.length > 1 && arr[stk.at(-1)] >= arr[i]) {
            stk.pop();
        }
        left[i] = stk.at(-1);
        stk.push(i);
    }
    // right
    stk = [n];
    const right = Array.from({ length: n }, () => { return n; });
    for (let i = n - 1; i >= 0; i--) {
        while (right.length > 1 && arr[stk.at(-1)] > arr[i]) {
            stk.pop();
        }
        right[i] = stk.at(-1);
        stk.push(i);
    }
    // sum
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i] * (i - left[i]) * (right[i] - i);
    }
    return sum % 1000000007;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumSubarrayMinsB(arr) {
    const n = arr.length;
    const left = Array.from({ length: n }, () => { return 0; });
    const right = Array.from({ length: n }, () => { return n; });
    const stk = [-1];
    for (let i = 0; i < n; i++) {
        while (stk.length > 1 && arr[stk.at(-1)] >= arr[i]) {
            right[stk.pop()] = i;
        }
        left[i] = stk.at(-1);
        stk.push(i);
    }
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i] * (i - left[i]) * (right[i] - i);
    }
    return sum % 1000000007;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumSubarrayMinsC(arr) {
    let sum = 0;
    const n = arr.length;
    const stk = [-1];
    for (let r = 0; r <= n; r++) {
        const x = r < n ? arr[r] : -1;
        while (stk.length > 1 && arr[stk.at(-1)] >= x) {
            const i = stk.pop();
            sum += arr[i] * (i - stk.at(-1)) * (r - i);
        }
        stk.push(r);
    }
    return sum % 1000000007;
}

module.exports = { sumSubarrayMinsA, sumSubarrayMinsB, sumSubarrayMinsC };

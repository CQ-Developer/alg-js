/**
 * @param {number[]} pushed
 * @param {number} popped
 * @returns {boolean}
 */
function validateStackSequences(pushed, popped) {
    const stack = [];
    let i = 0;
    for (const x of pushed) {
        stack.push(x);
        while (stack.length && stack.at(-1) == popped[i]) {
            stack.pop();
            i++;
        }
    }
    return !stack.length;
}

module.exports = { validateStackSequences };

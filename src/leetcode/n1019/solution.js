class ListNode {

    /**
     * @param {number} val
     * @param {ListNode} next
     */
    constructor(val, next) {
        this.val = val ? val : 0;
        this.next = next ? next : null;
    }

}

/**
 * @param {ListNode} head
 * @returns {number[]}
 */
function nextLargerNodes(head) {
    let [i, n] = [0, 0];
    for (let h = head; h; h = h.next) {
        n++;
    }
    const result = Array(n).fill(0);
    const stack = [];
    for (let h = head; h; h = h.next) {
        const x = h.val;
        while (stack.length && x > stack.at(-1)[0]) {
            result[stack.pop()[1]] = x;
        }
        stack.push([x, i++]);
    }
    return result;
}

module.exports = { ListNode, nextLargerNodes };

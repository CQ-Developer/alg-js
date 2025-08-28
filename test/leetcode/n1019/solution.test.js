const { ListNode, nextLargerNodes } = require('../../../src/leetcode/n1019/solution');

const f = test.each([
    { head: new ListNode(2, new ListNode(1, new ListNode(5))), result: [5, 5, 0] },
    { head: new ListNode(2, new ListNode(7, new ListNode(4, new ListNode(3, new ListNode(5))))), result: [7, 0, 5, 5, 0] },
]);

f('nextLargerNodes($head)', ({ head, result }) => {
    expect(nextLargerNodes(head)).toEqual(result);
});

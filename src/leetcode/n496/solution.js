/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @returns {number[]}
 */
function nextGreaterElement(nums1, nums2) {
    const stack = [-1];
    const map = new Map();
    for (const x of nums2.reverse()) {
        while (stack.length > 1 && x >= stack[stack.length - 1]) {
            stack.pop();
        }
        map.set(x, stack[stack.length - 1]);
        stack.push(x);
    }
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = map.get(nums1[i]);
    }
    return nums1;
}

module.exports = { nextGreaterElement };

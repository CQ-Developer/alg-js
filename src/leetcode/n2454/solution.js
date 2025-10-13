const { MinHeap } = require('@datastructures-js/heap');
const { Stack } = require('@datastructures-js/stack');


/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function secondGreaterElementA(nums) {
    const stack = new Stack();
    const heap = new MinHeap((a) => a[0]);
    const n = nums.length;
    const arr = new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        while (!heap.isEmpty() && nums[i] > heap.root()[0]) {
            arr[heap.extractRoot()[1]] = nums[i];
        }
        while (!stack.isEmpty() && nums[i] > nums[stack.peek()]) {
            const j = stack.pop();
            heap.insert([nums[j], j]);
        }
        stack.push(i);
    }
    return arr;
}

/**
 * @param {number[]} nums
 * @returns {number[]}
 */
function secondGreaterElementB(nums) {
    let [s1, s2] = [[], []];
    const n = nums.length;
    const a = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        while (s2.length && nums[i] > nums[s2[s2.length - 1]]) {
            a[s2.pop()] = nums[i];
        }
        const t = []
        while (s1.length && nums[i] > nums[s1[s1.length - 1]]) {
            t.push(s1.pop());
        }
        while (t.length) {
            s2.push(t.pop());
        }
        s1.push(i);
    }
    return a;
}

module.exports = { secondGreaterElementA, secondGreaterElementB };

const { Stack } = require('@datastructures-js/stack');
const { Deque } = require('@datastructures-js/deque');

/**
 * @param {number[]} nums
 * @param {number} k
 * @returns {number}
 */
function countNonDecreasingSubarraysA(nums, k) {
    const n = nums.length;

    /**
     * g[i]表示i右侧小与等于nums[i]的元素集合
     * @type {number[][]}
     */
    const g = Array.from({ length: n }, () => {
        return [];
    });

    /**
     * posR[i]表示大于等于nums[i]的右侧最近元素位置
     * @type {number[]}
     */
    const posR = Array.from({ length: n }, () => {
        return n;
    });

    /** @type {Deque<number>} */
    const st = new Stack();

    for (let i = 0; i < n; i++) {
        while (!st.isEmpty() && nums[i] >= nums[st.peek()]) {
            posR[st.pop()] = i;
        }
        if (!st.isEmpty()) {
            g[st.peek()].push(i);
        }
        st.push(i);
    }

    let cnt = 0, ans = 0;

    /**
     * @type {Deque<number>}
     */
    const q = new Deque();

    for (let l = 0, r = 0; r < n; r++) {
        const x = nums[r];

        // 保证队列的单调性(从队首到队尾单调递减, front > back)
        while (!q.isEmpty() && x >= nums[q.back()]) {
            q.popBack();
        }
        q.pushBack(r);

        // [l ... front ... x]
        // 队首为当前窗口最大值, x进入窗口增加的操作数
        cnt += nums[q.front()] - x;

        // 操作数大于k, 窗口左侧右移
        while (cnt > k) {
            // g[l]表示l右侧小于等于nums[l]的元素集合
            for (const i of g[l]) {
                if (i > r) {
                    break;
                }
                // 将nums[l]移除窗口后恢复的操作数
                cnt -= (nums[l] - nums[i]) * (Math.min(posR[i], r + 1) - i);
            }
            // 左侧离开窗口
            l++;
            // 队列的最左端是否还在窗口范围内
            if (!q.isEmpty() && q.front() < l) {
                q.popFront();
            }
        }

        // 已r为右端点的非递减子数组数量
        ans += r - l + 1;
    }

    return ans;
}

module.exports = { countNonDecreasingSubarraysA };

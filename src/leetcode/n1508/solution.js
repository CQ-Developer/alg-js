const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

/**
 * @abstract
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function rangeSum(nums, n, left, right) {
    throw new Error('skip');
}

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function rangeSumA(nums, n, left, right) {
    var heap = new MinPriorityQueue((a) => a[0]);
    for (let i = 0; i < n; i++) {
        heap.push([nums[i], i]);
    }
    let s = 0;
    for (let j = 1; j <= right; j++) {
        const [x, i] = heap.pop();
        if (j >= left) {
            s += x;
        }
        if (i + 1 < n) {
            heap.push([x + nums[i + 1], i + 1]);
        }
    }
    return s % 1000000007;
}

/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns {number}
 */
function rangeSumB(nums, n, left, right) {
    const [p, pp] = [[0], [0]];
    for (const x of nums) {
        p.push(p[p.length - 1] + x);
        pp.push(pp[pp.length - 1] + p[p.length - 1]);
    }

    /**
     * @param {number} x
     * @returns {number[]}
     */
    function getSumCnt(x) {
        let [j, sum, cnt] = [0, 0, 0];
        for (let i = 0; i < n; i++) {
            while (j < n && p[j + 1] - p[i] < x) {
                j++;
            }
            sum += pp[j] - pp[i] - (j - i) * p[i];
            cnt += j - i;
        }
        return [sum, cnt];
    }

    /**
     * (l...r]
     * @param {number} k
     * @returns {number}
     */
    function getKth(k) {
        let [l, r] = [0, p[n]];
        while (l < r) {
            const mid = l + Math.ceil((r - l) / 2);
            let [_, cnt] = getSumCnt(mid);
            if (cnt >= k) {
                r = mid - 1;
            } else {
                l = mid;
            }
        }
        return l;
    }

    /**
     * @param {number} k
     * @returns {number}
     */
    function f(k) {
        const x = getKth(k);
        const [sum, cnt] = getSumCnt(x);
        return sum + (k - cnt) * x;
    }

    return (f(right) - f(left - 1)) % 1000000007;
}

module.exports = { rangeSum, rangeSumA, rangeSumB };

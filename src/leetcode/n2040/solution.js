module.exports = { kthSmallestProduct, kthSmallestProductA };

/**
 * @abstract
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @returns {number}
 */
function kthSmallestProduct(nums1, nums2, k) {
    throw new Error('skip');
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @returns {number}
 */
function kthSmallestProductA(nums1, nums2, k) {
    const [m, n] = [nums1.length, nums2.length];

    /**
     * @param {number[]} a
     * @returns {number}
     */
    function find(a) {
        let [l, r] = [-1, a.length];
        while (l + 1 < r) {
            const i = l + Math.floor((r - l) / 2);
            if (a[i] >= 0) {
                r = i;
            } else {
                l = i;
            }
        }
        return r;
    }

    /**
     * @param {number} up
     * @returns {number}
     */
    function check(up) {
        let cnt = 0;
        if (up < 0) {
            // 右上
            let [i, j] = [0, y];
            while (i < x && j < n) {
                if (nums1[i] * nums2[j] > up) {
                    j++;
                } else {
                    i++;
                    cnt += n - j;
                }
            }
            // 左下
            [i, j] = [x, 0];
            while (i < m && j < y) {
                if (nums1[i] * nums2[j] > up) {
                    i++;
                } else {
                    j++;
                    cnt += m - i;
                }
            }
        } else {
            // 右上 + 左下
            cnt += x * (n - y) + y * (m - x);
            // 左上
            let [i, j] = [0, y - 1];
            while (i < x && j >= 0) {
                if (nums1[i] * nums2[j] > up) {
                    i++;
                } else {
                    j--;
                    cnt += x - i;
                }
            }
            // 右下
            [i, j] = [x, n - 1];
            while (i < m && j >= y) {
                if (nums1[i] * nums2[j] > up) {
                    j--;
                } else {
                    i++;
                    cnt += j - y + 1;
                }
            }
        }
        return cnt;
    }

    const [x, y] = [find(nums1), find(nums2)];
    const arr = [
        nums1[0] * nums2[0],
        nums1.at(-1) * nums2.at(-1),
        nums1[0] * nums2.at(-1),
        nums1.at(-1) * nums2[0]
    ];
    let [l, r] = [Math.min(...arr), Math.max(...arr)];
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid) >= k) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return l;
}

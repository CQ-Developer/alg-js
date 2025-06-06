/**
 * @abstract
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @returns {number}
 */
function maxDistance(side, points, k) {
    throw new Error('skip');
}

/**
 * @param {number} side
 * @param {number[][]} points
 * @param {number} k
 * @returns {number}
 */
function maxDistanceA(side, points, k) {
    const n = points.length;
    const arr = [];
    for (const [x, y] of points) {
        if (x == 0) {
            arr.push(y);
        } else if (y == side) {
            arr.push(side + x);
        } else if (x == side) {
            arr.push(3 * side - y);
        } else {
            arr.push(4 * side - x);
        }
    }
    arr.sort((a, b) => a - b);

    /**
     * @param {number} tar
     * @returns {number}
     */
    function find(tar) {
        let [l, r] = [-1, n];
        while (l + 1 < r) {
            const mid = l + Math.floor((r - l) / 2);
            if (arr[mid] >= tar) {
                r = mid;
            } else {
                l = mid;
            }
        }
        return r;
    }

    /**
     * @param {number} low
     * @returns {boolean}
     */
    function check(low) {
        const idx = Array.from({ length: k }, () => 0);
        for (let j = 1; j < k; j++) {
            idx[j] = find(arr[idx[j - 1]] + low)
            if (idx[j] == n) {
                return false;
            }
        }
        if (arr[idx[k - 1]] - arr[0] <= 4 * side - low) {
            return true;
        }
        for (let i = 1; i < idx[1]; i++) {
            idx[0] = i;
            for (let j = 1; j < k; j++) {
                while (arr[idx[j]] - arr[idx[j - 1]] < low) {
                    if (++idx[j] == n) {
                        return false;
                    }
                }
            }
            if (arr[idx[k - 1]] - arr[i] <= 4 * side - low) {
                return true;
            }
        }
        return false;
    }

    let [l, r] = [1, Math.floor(4 * side / k) + 1];
    while (l + 1 < r) {
        const mid = l + Math.floor((r - l) / 2);
        if (check(mid)) {
            l = mid;
        } else {
            r = mid;
        }
    }
    return l;
}

module.exports = { maxDistance, maxDistanceA };

class Solution {

    constructor() {
        if (new.target === Solution) {
            throw new Error('abstract call');
        }
    }

    /**
     * @abstract
     * @param {string[][]} matrix
     * @returns {number}
     */
    maximalRectangle(matrix) {
        throw new Error('abstract call');
    }

}

class SolutionA extends Solution {

    /**
     * @param {string[][]} matrix
     * @returns {number}
     */
    maximalRectangle(matrix) {
        const n = matrix[0].length;
        const heights = Array.from({ length: n }, () => { return 0; });

        /**
         * @returns {number}
         */
        const findMaxRec = () => {
            let mx = 0;
            for (let i = 0; i < n; i++) {
                const h = heights[i];
                let l = i - 1;
                while (l >= 0 && heights[l] >= h) {
                    l--;
                }
                let r = i + 1;
                while (r < n && heights[r] >= h) {
                    r++;
                }
                mx = Math.max(mx, h * (r - l - 1));
            }
            return mx;
        };

        let mx = 0;
        for (const row of matrix) {
            for (let j = 0; j < n; j++) {
                if (row[j] == '1') {
                    heights[j]++;
                } else {
                    heights[j] = 0;
                }
            }
            mx = Math.max(mx, findMaxRec());
        }
        return mx;
    }

}

module.exports = { Solution, SolutionA };

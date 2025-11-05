const { sortedIndex } = require("lodash");

class Solution {

    constructor() {
        if (new.target == Solution) {
            throw new Error('abstract call');
        }
    }

    /**
     * @abstract
     * @param {string[][]} matrix
     * @returns {number}
     */
    maximalSquare(matrix) {
        throw new Error('abstract call');
    }

}

class SolutionA extends Solution {

    /**
     * @param {string[][]} matrix
     * @returns {number}
     */
    maximalSquare(matrix) {
        const n = matrix[0].length;
        const heights = Array.from({ length: n }, () => { return 0; });
        const find = () => {
            let x = 0;
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
                x = Math.max(x, Math.min(h, r - l - 1));
            }
            return x;
        };
        let side = 0;
        for (const row of matrix) {
            for (let i = 0; i < n; i++) {
                if (row[i] == '1') {
                    heights[i]++;
                } else {
                    heights[i] = 0;
                }
            }
            side = Math.max(side, find());
        }
        return side * side;
    }

}

class SolutionB extends Solution {

    /**
     * @param {string[][]} matrix
     * @returns {number}
     */
    maximalSquare(matrix) {
        const h = matrix.length, w = matrix[0].length;
        const f = Array.from({ length: h + 1 }, () => {
            return Array.from({ length: w + 1 }, () => {
                return 0;
            });
        });
        let side = 0;
        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (matrix[i][j] == '1') {
                    f[i + 1][j + 1] = Math.min(f[i][j], f[i + 1][j], f[i][j + 1]) + 1;
                    side = Math.max(side, f[i + 1][j + 1]);
                }
            }
        }
        return side * side;
    }

}

class SolutionC extends Solution {

    /**
     * @param {string[][]} matrix
     * @returns {number}
     */
    maximalSquare(matrix) {
        const w = matrix[0].length;
        const f = Array.from({ length: w + 1 }, () => { return 0; });
        let side = 0;
        for (const row of matrix) {
            let p = 0;
            for (let j = 0; j < w; j++) {
                if (row[j] == '1') {
                    const t = f[j + 1];
                    f[j + 1] = Math.min(p, f[j], f[j + 1]) + 1;
                    side = Math.max(side, f[j + 1]);
                    p = t;
                } else {
                    f[j + 1] = 0;
                    p = 0;
                }
            }
        }
        return side * side;
    }

}

module.exports = { Solution, SolutionA, SolutionB, SolutionC };

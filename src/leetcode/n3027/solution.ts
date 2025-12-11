type numberOfPairs = (points: number[][]) => number;

function numberOfPairsA(points: number[][]): number {
    let cnt = 0;
    const n = points.length;
    points.sort((a, b) => a[0] - b[0] || b[1] - a[1]);
    for (let i = 0; i < n; i++) {
        const y1 = points[i][1];
        let maxY = -Infinity
        for (let j = i + 1; j < n && maxY < y1; j++) {
            const y2 = points[j][1];
            if (y2 <= y1 && y2 > maxY) {
                maxY = y2;
                cnt++;
            }
        }
    }
    return cnt;
}

export { numberOfPairs, numberOfPairsA };

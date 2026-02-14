export function countOddsA(low: number, high: number): number {
    let cnt = 0;
    for (let x = low; x <= high; x++) {
        cnt += x & 1;
    }
    return cnt;
}

export function countOddsB(low: number, high: number): number {
    return Math.floor((high + 1) / 2) - Math.floor(low / 2);
}

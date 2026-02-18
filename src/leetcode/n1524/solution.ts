export function numOfSubarraysA(arr: number[]): number {
    let cnt = 0, pre = 0, odd = 0, even = 1;
    for (const x of arr) {
        pre += x;
        if (pre % 2 == 0) {
            // 偶数
            even++;
            cnt += odd;
        } else {
            // 奇数
            odd++;
            cnt += even;
        }
    }
    return cnt % (10 ** 9 + 7);
}

export function numOfSubarraysB(arr: number[]): number {
    let cnt = 0, p = 0;
    const f = [1, 0];
    for (const x of arr) {
        p += x;
        f[p & 1]++;
        cnt += f[(p & 1) ^ 1];
    }
    return cnt % (10 ** 9 + 7);
}

export function xorQueries(arr: number[], queries: number[][]): number[] {
    const p = [0];
    arr.forEach((x, i) => p[i + 1] = p[i] ^ x);
    return queries.map(([l, r]) => p[r + 1] ^ p[l]);
}

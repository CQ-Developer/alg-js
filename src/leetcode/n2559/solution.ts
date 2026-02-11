export function vowelStrings(words: string[], queries: number[][]): number[] {
    const vo = ["a", "e", "i", "o", "u"];
    const pre = [0];
    words.forEach((w, i) => {
        const x = vo.includes(w[0]) && vo.includes(w[w.length - 1]);
        pre[i + 1] = pre[i] + (x ? 1 : 0);
    });
    return queries.map(([l, r]) => pre[r + 1] - pre[l]);
}

export function shiftingLetters(s: string, shifts: number[]): string {
    let suf = 0;
    const arr = [];
    for (let i = s.length - 1; i >= 0; i--) {
        suf += shifts[i];
        arr[i] = String.fromCodePoint((s.codePointAt(i)! - 97 + suf) % 26 + 97);
    }
    return arr.join("");
}

import { shiftingLetters } from "./solution.ts";

function register(f: (s: string, shifts: number[]) => string) {
    it.each([
        { s: "abc", shifts: [3, 5, 9], ans: "rpl" },
        { s: "aaa", shifts: [1, 2, 3], ans: "gfd" },
        { s: "mkgfzkkuxownxvfvxasy", shifts: [505870226, 437526072, 266740649, 224336793, 532917782, 311122363, 567754492, 595798950, 81520022, 684110326, 137742843, 275267355, 856903962, 148291585, 919054234, 467541837, 622939912, 116899933, 983296461, 536563513], ans: "wqqwlcjnkphhsyvrkdod" }
    ])(`${f.name}($s, $shifts)`, ({ s, shifts, ans }) => {
        expect(f(s, shifts)).toBe(ans);
    });
}

register(shiftingLetters);

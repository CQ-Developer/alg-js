import { shiftDistance } from "./solution.ts";

function register(f: (s: string, t: string, nextCost: number[], previusCost: number[]) => number) {
    it.each([
        {
            s: "abab",
            t: "baba",
            nc: [100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            pc: [1, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            dist: 2
        },
        {
            s: "leet",
            t: "code",
            nc: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            pc: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            dist: 31
        }
    ])(`${f.name}($s, $t, $nc, $pc)`, ({ s, t, nc, pc, dist }) => {
        expect(f(s, t, nc, pc)).toBe(dist);
    });
}

register(shiftDistance);

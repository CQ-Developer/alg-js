import { findLongestSubarray } from "./solution.ts";

function register(f: (arr: string[]) => string[]) {
    describe("interview 17.05 find longest subarray LCCI", () => {
        it.each([
            { arr: ["A", "1", "B", "C", "D", "2", "3", "4", "E", "5", "F", "G", "6", "7", "H", "I", "J", "K", "L", "M"], ans: ["A", "1", "B", "C", "D", "2", "3", "4", "E", "5", "F", "G", "6", "7"] },
            { arr: ["A", "A"], ans: [] }
        ])(`${f.name}($arr)`, ({ arr, ans }) => {
            expect(f(arr)).toEqual(ans);
        });
    });
}

register(findLongestSubarray);

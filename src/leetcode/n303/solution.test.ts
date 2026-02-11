import { NumArray } from "./solution.ts";

test("range sum query - immutable", () => {
    const code = new NumArray([-2, 0, 3, -5, 2, -1]);
    expect(code.sumRange(0, 2)).toBe(1);
    expect(code.sumRange(2, 5)).toBe(-1);
    expect(code.sumRange(0, 5)).toBe(-3);
});

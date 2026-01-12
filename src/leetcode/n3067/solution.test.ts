import { countPairsOfConnectableServers } from "./solution.ts";

function register(f: (edges: number[][], signalSpeed: number) => number[]) {
    describe("Count Pairs of Connectable Servers in a Weighted Tree Network", () => {
        it.each([
            { edges: [[0, 1, 1], [1, 2, 5], [2, 3, 13], [3, 4, 9], [4, 5, 2]], signalSpeed: 1, ans: [0, 4, 6, 6, 4, 0] },
            { edges: [[0, 6, 3], [6, 5, 3], [0, 3, 1], [3, 2, 7], [3, 1, 6], [3, 4, 2]], signalSpeed: 3, ans: [2, 0, 0, 0, 0, 0, 2] }
        ])(`${f.name}($edges, $signalSpeed)`, ({ edges, signalSpeed, ans }) => {
            expect(f(edges, signalSpeed)).toEqual(ans);
        });
    });
}

register(countPairsOfConnectableServers);

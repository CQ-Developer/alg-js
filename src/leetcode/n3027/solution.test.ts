import { numberOfPairs, numberOfPairsA } from './solution.ts';

function register(f: numberOfPairs) {
    describe('Find the Number of Ways to Place People II', () => {
        it.each([
            { points: [[1, 1], [2, 2], [3, 3]], ans: 0 },
            { points: [[6, 2], [4, 4], [2, 6]], ans: 2 },
            { points: [[3, 1], [1, 3], [1, 1]], ans: 2 }
        ])(f.name + '($points)', ({ points, ans }) => {
            expect(f(points)).toBe(ans);
        });
    });
}

register(numberOfPairsA);

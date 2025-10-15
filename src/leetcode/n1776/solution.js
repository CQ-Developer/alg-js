/**
 * 单调栈
 * @param {number[][]} cars
 * @returns {number[]}
 */
function getCollisionTimes(cars) {
    const n = cars.length;
    const times = Array.from({ length: n }, () => -1);
    const stack = [n - 1];
    for (let i = n - 2; i > -1; i--) {
        while (stack.length) {
            const j = stack.at(-1);
            if (cars[i][1] <= cars[j][1]) {
                stack.pop();
            } else {
                const cost = (cars[j][0] - cars[i][0]) / (cars[i][1] - cars[j][1]);
                if (times[j] != -1 && cost >= times[j]) {
                    stack.pop();
                } else {
                    times[i] = cost;
                    break;
                }
            }
        }
        stack.push(i);
    }
    return times;
}

module.exports = { getCollisionTimes };

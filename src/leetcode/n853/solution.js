/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @returns {number}
 */
function carFleetA(target, position, speed) {
    const n = position.length;
    const cars = Array(n);
    for (let i = 0; i < n; i++) {
        cars[i] = [position[i], speed[i]];
    }
    cars.sort((a, b) => a[0] - b[0]);
    const stack = [Infinity];
    for (const car of cars) {
        const time = (target - car[0]) / car[1];
        while (time >= stack[stack.length - 1]) {
            stack.pop();
        }
        stack.push(time);
    }
    return stack.length - 1;
}

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @returns {number}
 */
function carFleetB(target, position, speed) {
    const times = Array(target);
    for (let i = 0; i < position.length; i++) {
        times[position[i]] = (target - position[i]) / speed[i];
    }
    let [pre, cnt] = [0, 0];
    for (let i = target - 1; i >= 0; i--) {
        if (times[i] > pre) {
            cnt++;
            pre = times[i];
        }
    }
    return cnt;
}

module.exports = { carFleetA, carFleetB };

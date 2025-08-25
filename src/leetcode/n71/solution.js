/**
 * @param {string} path
 * @returns {string}
 */
function simplifyPath(path) {
    const stack = [];
    for (const p of path.split("/")) {
        if (p == '' || p == '.') {
            continue;
        }
        if (p != '..') {
            stack.push(p);
        } else {
            stack.pop()
        }
    }
    return '/' + stack.join('/');
}

module.exports = { simplifyPath };

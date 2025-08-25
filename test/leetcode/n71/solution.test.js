const { simplifyPath } = require('../../../src/leetcode/n71/solution');

test.each([
    { s: '/home/', r: '/home' },
    { s: '/home//foo/', r: '/home/foo' },
    { s: '/home/user/Documents/../Pictures', r: '/home/user/Pictures' },
    { s: '/../', r: '/' },
    { s: '/.../a/../b/c/../d/./', r: '/.../b/d' }
])('simplifyPath($s)', ({ s, r }) => {
    expect(simplifyPath(s)).toBe(r);
});

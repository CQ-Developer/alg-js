const { BrowserHistory } = require('../../../src/leetcode/n1472/solution');

test('BrowserHistory', () => {
    const browser = new BrowserHistory('leetcode.com')
    browser.visit("google.com");
    browser.visit("facebook.com");
    browser.visit("youtube.com");
    expect(browser.back(1)).toBe("facebook.com");
    expect(browser.back(1)).toBe("google.com");
    expect(browser.forward(1)).toBe("facebook.com");
    browser.visit("linkedin.com");
    expect(browser.forward(2)).toBe("linkedin.com");
    expect(browser.back(2)).toBe("google.com");
    expect(browser.back(7)).toBe("leetcode.com");
});
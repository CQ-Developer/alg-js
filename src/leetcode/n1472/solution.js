class BrowserHistory {

    #pos = 0;
    #history = [];

    /**
     * @param {string} homepage
     */
    constructor(homepage) {
        this.#history.push(homepage);
    }

    /**
     * @param {string} url
     */
    visit(url) {
        this.#history.splice(++this.#pos);
        this.#history.push(url);
    }

    /**
     * @param {number} steps
     * @returns {string}
     */
    back(steps) {
        this.#pos = Math.max(this.#pos - steps, 0);
        return this.#history[this.#pos];
    }

    /**
     * @param {number} steps
     * @returns {string}
     */
    forward(steps) {
        this.#pos = Math.min(this.#pos + steps, this.#history.length - 1);
        return this.#history[this.#pos];
    }

}

module.exports = { BrowserHistory };

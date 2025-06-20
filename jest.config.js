/**
 * @type {import('jest').Config}
 */
module.exports = {
    verbose: true,
    testMatch: ['<rootDir>/test/**/*.test.js'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    },
    testTimeout: 10000
};

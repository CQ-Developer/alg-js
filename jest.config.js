/**
 * @type {import('jest').Config}
 */
const config = {
    verbose: true,
    testMatch: ['<rootDir>/test/**/*.js'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    },
    testTimeout: 10000
};

module.exports = config

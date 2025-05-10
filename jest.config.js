/**
 * @type {import('jest').Config}
 */
const config = {
    verbose: true,
    testMatch: ['<rootDir>/test/**/*.js'],
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1'
    }
};

module.exports = config

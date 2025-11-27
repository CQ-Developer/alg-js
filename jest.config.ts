import { createDefaultPreset, type JestConfigWithTsJest } from 'ts-jest';

const presetConifg = createDefaultPreset({});

const jestConfig: JestConfigWithTsJest = {
  ...presetConifg,
  testEnvironment: 'node',
  transform: {
    '^.+\\.(ts|js)$': 'ts-jest'
  },
  testPathIgnorePatterns: ['node_modules'],
  testMatch: ['<rootDir>/test/**/?(*.)+(spec|test).(ts|js)'],
  verbose: true,
  cache: true
};

export default jestConfig;
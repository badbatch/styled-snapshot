const repodogConfig = require('@repodog/jest-config');

module.exports = {
  ...repodogConfig,
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/types.ts',
    '!**/*.test.*',
    '!**/__test__/**',
    '!src/to-match-styled-snapshot/index.ts',
  ],
  setupFilesAfterEnv: ['<rootDir>/test-setup.js'],
  testMatch: ['<rootDir>/src/**/*.test.*'],
};

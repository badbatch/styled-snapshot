const repodogConfig = require('@repodog/jest-config');

module.exports = {
  ...repodogConfig,
  collectCoverageFrom: [...repodogConfig.collectCoverageFrom, '!src/to-match-styled-snapshot/index.ts'],
};

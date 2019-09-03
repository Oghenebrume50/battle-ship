module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true
  },
  "overrides": [
    Object.assign(
      {
        "files": [ '**/*.test.js' ],
        "env": { jest: true },
        "plugins": [ 'jest' ],
      },
      require('eslint-plugin-jest').configs.recommended
    )
  ],
  "extends": "airbnb-base",
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "parserOptions": {
    "ecmaVersion": 2018
  },
  "rules": {
    "no-param-reassign": 0,
    "consistent-return": false,
    "no-restricted-globals": 0
  }
};
# Code Coverage

- <https://www.npmjs.com/package/jest-junit>

```json
// config/jest/config.js
{
  reporters: [
    'default',
    [
      'jest-junit',
      { outputDirectory: './coverage' }
    ]
  ],
  // ignore patterns
  'coveragePathIgnorePatterns': ['__fixtures__', 'jest.setup.js', 'pages/example.js'],
  // set coverge treshold
  'coverageThreshold': {
    'global': {
      'branches': 80,
      'functions': 90,
      'lines': 90,
      'statements': 90
    }
  }
}
```

- `yarn test:coverage`
- see `./coverage/lcov-report` for HTML output

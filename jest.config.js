module.exports = {
  ...require('./test/jest-common'),
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageThreshold: {
    //whatever pass/fail constraints we want to enforce coverage-wise
    global: {
      statements: 15,
      branches: 10,
      functions: 15,
      lines: 15,
    },
    //whatever pass/fail constraints we want to enforce coverage-wise, file-specific
    //this is great if some files are very critical in our app and need to be as tested as possible.
    './src/shared/utils.js': {
      statements: 100,
      branches: 80,
      functions: 100,
      lines: 100,
    },
  },
  projects: [
    './test/jest.lint.js',
    './test/jest.client.js',
    './test/jest.server.js',
  ], //multi-envrionment testing!
}

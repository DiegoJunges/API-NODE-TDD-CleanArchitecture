module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "node",
  collectCoverage: true,
  preset: '@shelf/jest-mongodb',
  collectCoverageFrom: [
    '<rootDir>/src/presentation/**/*.js'
  ],
  coverageReporters: [
    "text-summary",
    "lcov",
  ]
}

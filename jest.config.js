module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "node",
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/presentation/**/*.js'
  ],
  coverageReporters: [
    "text-summary",
    "lcov",
  ]
}

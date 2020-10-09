module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "node",
  collectCoverage: true,
  preset: '@shelf/jest-mongodb',
  collectCoverageFrom: [
    '**/src/**/*.js', '!**/src/main/**.js'
  ],
  coverageReporters: [
    "text-summary",
    "lcov",
  ]
}

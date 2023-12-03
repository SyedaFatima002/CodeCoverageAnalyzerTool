module.exports = {
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    preset: 'ts-jest',
    testEnvironment: 'node',
    reporters: [
      'default',
      ['jest-html-reporters', {
        publicPath: './coverage',
        filename: 'test-report.html',
        expand: true,
      }],
    ],
    collectCoverageFrom: ["myFile.ts"],
    coverageDirectory: "coverage",
  };
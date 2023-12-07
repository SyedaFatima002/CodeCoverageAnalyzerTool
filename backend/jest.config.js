module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  preset: "ts-jest",
  testEnvironment: "node",
  testResultsProcessor: "./generate-pdf.js",
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./coverage",
        filename: "test-report.html",
        expand: true,
      },
    ],
  ],
  collectCoverageFrom: [`./uploads/newFile.ts`],
  coverageDirectory: "coverage",
};

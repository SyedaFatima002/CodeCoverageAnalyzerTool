let filename = "";
let fullFilePath = "";
function getVariables(a) {
  filename = a;
  fullFilePath = `./uploads/${filename}`;
  console.log(`Full File Path is: ${fullFilePath}`);
}

module.exports = {
  getVariables,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  preset: "ts-jest",
  testEnvironment: "node",
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

const fs = require("fs");
const filename = "functions.txt";
const content = fs.readFileSync(filename, "utf-8");
const lines = content.split("\n");
const functions = lines.map((line) => {
  const [functionName, params] = line.split(": ");
  return { functionName, params: params.split(", ") };
});

const tests = functions
  .map((func) => {
    return `
        test('${func.functionName} test', () => {
            const result = ${func.functionName}(${func.params.join(", ")});
            expect(result).toBeDefined();
        });
    `;
  })
  .join("\n");

const testFilename = "functions.test.js";
const testContent = `
    const { ${functions.map((func) => func.functionName).join(", ")} } = require('./myFile.js');
    ${tests}
`;
fs.writeFileSync(testFilename, testContent);

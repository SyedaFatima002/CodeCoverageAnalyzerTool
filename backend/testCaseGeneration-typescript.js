const fs = require("fs");
const { faker } = require("@faker-js/faker"); // This will help in generating random values for function parameters

// Read the functions.txt file
const filename = "functions.txt";
const content = fs.readFileSync(filename, "utf-8");
const lines = content.split("\n");

// Map each line to an object with function name and parameters
const functions = lines.map((line) => {
  const [functionName, params] = line.split("= ");
  return { functionName, params: params.split(", ") };
});

// Generate test cases
const tests = functions
  .map((func) => {
    // Generate random values for the parameters
    const params = func.params.map((param) => {
      const [name, type] = param.split(": "); // Getting the name and type of parameter

      // Generating random values based on the type
      switch (type) {
        case "number":
          return faker.number.int();
        case "string":
          return faker.lorem.word();
        case "boolean":
          return faker.datatype.boolean();
        default:
          return faker.number.int();
      }
    });

    return `
     test('${func.functionName} test', () => {
         const result = ${func.functionName}(${params.join(", ")});
         expect(result).toBeDefined();
     });
 `;
  })
  .join("\n");

// Write the test cases to a file
const testFilename = "functions2.test.js";
const testContent = `
 const { ${functions.map((func) => func.functionName).join(", ")} } = require('./myFile.ts');
 ${tests}
`;
fs.writeFileSync(testFilename, testContent);

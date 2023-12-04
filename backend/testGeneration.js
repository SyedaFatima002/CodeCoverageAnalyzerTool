const fs = require("fs");
const { faker } = require("@faker-js/faker"); // This will help in generating random values for function parameters

function testGeneration(TEST_FILE) {
  // Read the functions.txt file
  const filename = "functions.txt";
  const content = fs.readFileSync(filename, "utf-8");
  const lines = content.split("\n");

  //this function counts the number of operators
  //in all conditions in the function-->need to determine number of
  //test cases that need to be generated
  function countOperators(conditions) {
    const operators = ["==", "===", "!=", "!==", ">", "<", ">=", "<=", "&&", "||"];
    const operatorSet = new Set();

    conditions.forEach((condition) => {
      operators.forEach((operator) => {
        const count = (condition.match(new RegExp(operator, "g")) || []).length;
        if (count > 0) {
          operatorSet.add(operator);
        }
      });
    });

    return operatorSet.size;
  }

  // Map each line to an object with function name, parameters, conditions and function return type
  const functions = lines.map((line) => {
    //separating function name and everything else
    const [func, combo] = line.split("= ");

    //separating function Name and return type
    const [functionName, returnType] = func.split(":");

    //separating params and conditions
    const [param, condition] = combo.split(", conditions:");

    //separating params into an array
    const params = param.trim().split(", ");

    //separating conditions into an array
    const conditions = condition ? condition.trim().split(", ") : [];

    //calculating how many test cases need to be made
    let testCasesCount = countOperators(conditions);
    let testCases = Math.pow(2, testCasesCount);

    return { functionName, params, conditions, returnType, testCases };
  });

  console.log(functions);

  //Generate Test Cases
  const tests = functions
    .map((func) => {
      //Storing needed variables
      const { functionName, params, returnType, testCases } = func;

      //generating values for testCases number of test cases
      const testFunc = Array.from({ length: testCases }, (_, index) => {
        //generating random values for paramters
        const Params = params.map((param) => {
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

        //generating possible result
        var predictedResult;
        switch (returnType) {
          case "number":
            predictedResult = faker.number.int();
          case "string":
            predictedResult = faker.lorem.word();
          case "boolean":
            predictedResult = faker.datatype.boolean();
          default:
            predictedResult = faker.number.int();
        }

        //returning testcase
        return `
        test('${functionName} test ${index + 1}', () => {
            const result = ${functionName}(${Params.join(", ")});
            expect(result).toBe(${predictedResult});
        });`;
      });

      return testFunc.join("\n");
    })
    .join("\n");

  // Write the test cases to a file
  const testFilename = "functions.test.tsx";
  const testContent = `
 const { ${functions
   .map((func) => func.functionName)
   .join(", ")} } = require('./uploads/${TEST_FILE}');
 ${tests}
`;
  fs.writeFileSync(testFilename, testContent);
}

module.exports = testGeneration;

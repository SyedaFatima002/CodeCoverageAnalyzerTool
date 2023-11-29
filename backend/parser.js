const fs = require("fs");
const esprima = require("esprima");
const estraverse = require("estraverse");

const filename = "myFile.js"; //File which needs to be parsed
const content = fs.readFileSync(filename, "utf-8");
const ast = esprima.parseScript(content);

const functionInfo = [];

estraverse.traverse(ast, {
  enter: function (node) {
    if (node.type === "FunctionDeclaration") {
      const functionName = node.id.name;
      const params = node.params.map((param) => param.name);
      functionInfo.push({ functionName, params });
    }
  },
});

const outputFilename = "functions.txt"; //File which will contain the function names and parameters
const outputContent = functionInfo
  .map((info) => `${info.functionName}: ${info.params.join(", ")}`)
  .join("\n");
fs.writeFileSync(outputFilename, outputContent);

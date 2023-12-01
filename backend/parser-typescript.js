const fs = require("fs");
const ts = require("typescript");

// Read the TypeScript file
const filename = "myFile.ts";
const content = fs.readFileSync(filename, "utf-8");

// Parse the TypeScript file into an AST
const sourceFile = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest, true);

// Traverse the AST to extract function names, parameters, and their data types
const functionInfo = [];

function visit(node) {
  if (ts.isFunctionDeclaration(node)) {
    const functionName = node.name.text;
    const params = node.parameters.map((param) => ({
      name: param.name.text,
      type: param.type ? param.type.getText() : "any",
    }));
    functionInfo.push({ functionName, params });
  }

  ts.forEachChild(node, visit);
}

// Calling the visit function and sending our source file to it
visit(sourceFile);

// Write the extracted information to a text file
const outputFilename = "functions.txt";
const outputContent = functionInfo
  .map(
    (info) =>
      `${info.functionName}: ${info.params
        .map((param) => `${param.name}: ${param.type}`)
        .join(", ")}`
  )
  .join("\n");
fs.writeFileSync(outputFilename, outputContent);

//This function will replace the colons after the function name with = symbol
//This is required so that testCaseGeneration-typescript.js file runs correctly
function replaceColonWithEqual(fileName) {
  const data = fs.readFileSync(fileName, "utf8");
  const lines = data.split("\n");
  const newLines = lines.map((line) => {
    const firstColonIndex = line.indexOf(":");
    if (firstColonIndex !== -1) {
      const firstPart = line.slice(0, firstColonIndex);
      const secondPart = line.slice(firstColonIndex + 1);
      return `${firstPart}=${secondPart}`;
    }
    return line;
  });
  const newData = newLines.join("\n");
  fs.writeFileSync(fileName, newData, "utf8");
}

//Calling the function
replaceColonWithEqual(outputFilename);

//Following code will get the return type of function as well

// const fs = require("fs");
// const ts = require("typescript");

// // Read the TypeScript file
// const filename = "myFile.ts";
// const content = fs.readFileSync(filename, "utf-8");

// // Parse the TypeScript file into an AST
// const sourceFile = ts.createSourceFile(filename, content, ts.ScriptTarget.Latest, true);

// // Traverse the AST to extract function names, parameters, and their data types
// const functionInfo = [];

// function visit(node) {
//   if (ts.isFunctionDeclaration(node)) {
//     const functionName = node.name.text;
//     const params = node.parameters.map((param) => ({
//       name: param.name.text,
//       type: param.type ? param.type.getText() : "any",
//     }));
//     const returnType = node.type ? node.type.getText() : "void";
//     functionInfo.push({ functionName, params, returnType });
//   }

//   ts.forEachChild(node, visit);
// }

// visit(sourceFile);

// // Write the extracted information to a text file
// const outputFilename = "functions.txt";
// const outputContent = functionInfo
//   .map(
//     (info) =>
//       `${info.functionName}: ${info.params
//         .map((param) => `${param.name}: ${param.type}`)
//         .join(", ")} => ${info.returnType}`
//   )
//   .join("\n");
// fs.writeFileSync(outputFilename, outputContent);

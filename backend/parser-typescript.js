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

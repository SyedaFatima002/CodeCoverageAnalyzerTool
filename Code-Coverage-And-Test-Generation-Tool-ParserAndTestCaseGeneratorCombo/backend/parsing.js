const fs = require("fs");
const { Project } = require("ts-morph");

// Reading the TypeScript file
const filename = "myFile.ts";
const content = fs.readFileSync(filename, "utf-8");

// Creating a TypeScript project and add the source file
const project = new Project();
const sourceFile = project.createSourceFile("temp.ts", content);

// Initializing the array to store function information
const functionInfo = [];

// Traversing the AST using ts-morph to extract function names, parameters, and conditions
// sourceFile.forEachDescendant((node) => {
//   if (node.getKindName() === "FunctionDeclaration") {
//     const functionName = node.getName();
//     const params = node.getParameters().map((param) => ({
//       name: param.getName(),
//       type: param.getTypeNode() ? param.getTypeNode().getText() : "any",
//     }));

//     const conditions = [];

//     // Function body
//     const functionBody = node.getBody();
    
//     // Process if statements
//     functionBody?.forEachDescendant((childNode) => {
//       if (childNode.getKindName() === "IfStatement") {
//         conditions.push({ type: 'if', condition: childNode.getExpression().getText() });
//       } else if (childNode.getKindName() === "ElseIfStatement") {
//         conditions.push({ type: 'else if', condition: childNode.getExpression().getText() });
//       } else if (childNode.getKindName() === "ElseStatement") {
//         conditions.push({ type: 'else', condition: 'else' });
//       }
//       // You can add more conditions for other types of statements if needed
//     });

//     functionInfo.push({ functionName, params, conditions });
//   }
// });
sourceFile.forEachDescendant((node) => {
  if (node.getKindName() === "FunctionDeclaration") {
    const functionName = node.getName();
    const returnType = node.getReturnTypeNode()?.getText() || "any"; // Get the return type or default to "any"

    const params = node.getParameters().map((param) => ({
      name: param.getName(),
      type: param.getTypeNode() ? param.getTypeNode().getText() : "any",
    }));

    const conditions = [];

    // Function body
    const functionBody = node.getBody();

    // Process if statements
    functionBody?.forEachDescendant((childNode) => {
      if (childNode.getKindName() === "IfStatement") {
        conditions.push({ type: 'if', condition: childNode.getExpression().getText() });
      } else if (childNode.getKindName() === "ElseIfStatement") {
        conditions.push({ type: 'else if', condition: childNode.getExpression().getText() });
      } else if (childNode.getKindName() === "ElseStatement") {
        conditions.push({ type: 'else', condition: 'else' });
      }
      // You can add more conditions for other types of statements if needed
    });

    functionInfo.push({
      signature: `${functionName}: ${returnType}`,
      params,
      conditions
    });
  }
});



// Write the extracted information to a text file
const outputFilename = "functions.txt";
// const outputContent = functionInfo
//   .map((info) => {
//     const conditions = info.conditions.map(cond => `${cond.type}: ${cond.condition}`).join(', ');
//     return `${info.functionName}: parameters: ${info.params.map((param) => `${param.name}: ${param.type}`).join(", ")}, conditions: ${conditions}`;
//   })
//   .join("\n");
const outputContent = functionInfo
  .map((info) => {
    const conditions = info.conditions.map(cond => `${cond.type}: ${cond.condition}`).join(', ');
    return `${info.signature}= ${info.params.map((param) => `${param.name}: ${param.type}`).join(", ")}, conditions: ${conditions}`;
  })
  .join("\n");
fs.writeFileSync(outputFilename, outputContent);

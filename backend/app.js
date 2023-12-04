const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const parseFile = require("./parsing.js");
const testGeneration = require("./testGeneration.js");
const { exec } = require("child_process");

const app = express();

app.use(cors());
app.use(express.static("coverage"));

const PORT = 7000; //Port for server

// This configuration determines where the uploaded files will be stored on the server
// The destination function specifies the directory where the uploaded files will be saved
// The filename function determines the name of the uploaded file
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// Creating the multer instance based on our configuration
const upload = multer({ storage });

// Endpoint for uploading a file to the server
app.post("/upload/file", upload.single("file"), (req, res) => {
  if (req.file) {
    parseFile(req.file.filename);
    testGeneration(req.file.filename);
    console.log(req.file.filename);
    res.status(200).json({
      success: true,
      message: "File uploaded successfully",
    });
  } else {
    res.status(400).json({
      success: false,
      message: "No file uploaded",
    });
  }
});

// Endpoint for generating the coverage report
// The "coverage" directory will be created with a test-report.html file
// That html file is the report
app.get("/run-test", (req, res) => {
  exec("npm test", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
  });
  res.status(200).json({
    success: true,
    message: "Test started",
  });
});

// Endpoint for opening the report (not tested yet)
app.get("/report", (req, res) => {
  res.redirect("/test-report.html");
});

// app.get("/report", (req, res) => {
//   res.sendFile(path.join(__dirname, "/coverage/test-report.html"));
// });

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

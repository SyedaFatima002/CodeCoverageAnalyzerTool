const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(cors());

const PORT = 5000; //Port for server

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

// Endpoint for uploading files to the server
app.post("/upload/file", upload.single("file"), (req, res) => {
  res.status(200).json({
    success: true,
    message: "File uploaded successfully",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

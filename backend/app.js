const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const PORT = 4000; //Port for server

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});

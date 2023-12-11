const express = require("express");
const app = express();

const port = 3000;

const bookController = (req, res) => {
  return res.json({
    message: "All books",
  });
};

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.get("/books", bookController);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

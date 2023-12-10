const express = require("express");

function bookFunction(req, res) {
  const books = [
    {
      title: "Harry Pottered",
      description: "Fantasy movie",
      year: 2000,
    },
    {
      title: "Lord of The Rings",
      description: "Fantasy movie",
      year: 2001,
    },
    {
      title: "The Hobbit",
      description: "Fantasy movie",
      year: 2002,
    },
  ];

  res.json(books);
}

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello world",
  });
});

app.get("/books", bookFunction);

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const books = [
  { id: 1, title: "Clean Code", author: "Robert C. Martin" },
  { id: 2, title: "Atomic Habits", author: "James Clear" }
];

app.get("/books", (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
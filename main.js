const express = require("express");
const app = express();
const db = require("./db");
require("dotenv").config();

app.use(express.json());

const { newBook } = require("./books");
const { getBooks } = require("./books");
const { updateBook } = require("./books");
const { deleteBook } = require("./books");
const { orderByBooks } = require("./books");
const { isNullBooks } = require("./books");
const { isNotNullBooks } = require("./books");

//APIs
app.post("/books", newBook);
app.get("/books", getBooks);
app.put("/books/:book_id", updateBook);
app.delete("/books/:book_id", deleteBook);
app.get("/orderByBooks", orderByBooks);
app.get("/isNullBooks", isNullBooks);
app.get("/isNotNullBooks", isNotNullBooks);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("SERVER IS WORKING ON http://localhost:" + PORT);
});

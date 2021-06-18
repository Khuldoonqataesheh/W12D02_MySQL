const db = require("./db");

const newBook = (req, res) => {
  const { title, author, price } = req.body;
  const query = `INSERT INTO books (title, author, price) VALUES (?, ?, ?)`;
  const data = [title, author, price];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const getBooks = (req, res) => {
  const query = `SELECT * FROM books`;

  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const updateBook = (req, res) => {
  const id = req.params.book_id;
  const { title, author, price } = req.body;
  const query = `UPDATE books 
    SET title = ?, author =  ? , price = ? 
     WHERE id = ?`;
  const data = [title, author, price, id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const deleteBook = (req, res) => {
  const id = req.params.book_id;
  const query = `DELETE FROM books WHERE id = ? `;
  const data = [id];
  db.query(query, data, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const orderByBooks = (req, res) => {
  const query = `SELECT * FROM books ORDER BY id`;

  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const isNullBooks = (req, res) => {
  const query = `SELECT * FROM books 
  WHERE price IS NULL`;

  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};

const isNotNullBooks = (req, res) => {
  const query = `SELECT * FROM books 
  WHERE price IS NOT NULL`;

  db.query(query, (err, result) => {
    if (err) throw err;
    console.log("RESULT: ", result);
    res.json(result);
  });
};


module.exports = {
  newBook,
  getBooks,
  updateBook,
  deleteBook,
  orderByBooks,
  isNullBooks,
  isNotNullBooks
};

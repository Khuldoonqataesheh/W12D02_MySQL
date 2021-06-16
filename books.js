const db = require('./db');

const newBook  = (req,res) => {
    const {title ,author ,price} = req.body
  const query =  `INSERT INTO books (title, author, price) VALUES (?, ?, ?)`;
  const  data = [title ,author ,price]
  db.query(query, data,(err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.json(result)
  });
};
const getBooks  = (req,res) => {
  
  const query =  `SELECT * FROM books`;

  db.query(query, (err, result) => {
    if (err) throw err;
    console.log('RESULT: ', result);
    res.json(result)
  });
};



module.exports = {
    newBook,
    getBooks
};
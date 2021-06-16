const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());

const {newBook} = require('./books')
const {getBooks} = require('./books')


//APIs
app.post('/books', newBook);
app.get('/books', getBooks);

const PORT = 3000;
app.listen(PORT, () => {
  console.log('SERVER IS WORKING ON http://localhost:' + PORT);
});
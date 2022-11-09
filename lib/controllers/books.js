const { Router } = require('express');
const Book = require('../models/Book');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const books = await Book.getById(req.params.id);
    res.json(books);
  })

  .get('/', async (req, res) => {
    const books = await Book.getAllBooks();
    res.json(books);
  });


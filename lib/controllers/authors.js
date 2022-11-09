const { Router } = require('express');
const Author = require('../models/Author.js');

module.exports = Router()
  .get('/:id', async (req, res) => {
    const authors = await Author.getById(req.params.id);
    res.json(authors);
  })

  .get('/', async (req, res) => {
    const authors = await Author.getAllAuthors();
    res.json(authors);
  });

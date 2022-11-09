const { Router } = require('express');
const Pair = require('../models/Pair.js');

module.exports = Router()
  .get('/', async (req, res) => {
    const pairs = await Pair.getAllPairs();
    res.json(pairs);
  });

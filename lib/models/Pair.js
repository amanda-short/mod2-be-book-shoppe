const pool = require('../utils/pool');

class Pair {
  author_id;
  book_id;

  constructor(row) {
    this.author_id = row.author_id;
    this.book_id = row.book_id; 
  }

  static async getAllPairs() {
    const { rows } = await pool.query('SELECT * FROM pairs');

    return rows.map((row) => new Pair(row));  
  }
}

module.exports = Pair;

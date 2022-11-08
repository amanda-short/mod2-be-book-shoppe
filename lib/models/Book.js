const pool = require('../utils/pool');

class Book {
  id;
  title;
  release;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.release = row.release;  
  }

  static async getAllBooks() {
    const { rows } = await pool.query('SELECT * FROM books');

    return rows.map((row) => new Book(row));  
  }
}

module.exports = Book;

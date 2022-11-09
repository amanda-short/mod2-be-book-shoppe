const pool = require('../utils/pool');

class Book {
  constructor({ id, title, release, pairs, }) {
    this.id = id;
    this.title = title;
    this.release = release;
    this.pairs = pairs; 
    // this.name = name; 
  }
  
  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT books.*,
      COALESCE(json_agg(to_jsonb(pairs))
        FILTER (WHERE pairs.id IS NOT NULL), '[]') as pairs
        FROM books
        LEFT JOIN pairs
        ON books.id = pairs.book_id
        WHERE books.id = $1
        GROUP BY books.id
        ORDER BY books.id`,
      [id]
    );
    return new Book(rows[0]);
  }
  

  static async getAllBooks() {
    const { rows } = await pool.query('SELECT * FROM books');

    return rows.map((row) => new Book(row));  
  }
}

module.exports = Book;

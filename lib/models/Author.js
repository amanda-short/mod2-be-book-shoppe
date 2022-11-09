const pool = require('../utils/pool');

class Author {
  constructor({ id, name }) {
    this.id = id;
    this.name = name; 
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT authors.*,
      COALESCE(json_agg(to_jsonb(pairs))
      FILTER (WHERE pairs.id IS NOT NULL), '[]') as pairs
      FROM authors
      LEFT JOIN pairs
      ON authors.id = pairs.author_id
      WHERE authors.id = $1
      GROUP BY authors.id
      ORDER BY authors.id
      `, [id]);
    return new Author(rows[0]);
  }

  static async getAllAuthors() {
    const { rows } = await pool.query('SELECT * FROM authors');

    return rows.map((row) => new Author(row));  
  }
}

module.exports = Author;

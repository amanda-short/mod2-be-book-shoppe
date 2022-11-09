const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/books should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(8);
    const startWithWhy = res.body.find((boo) => boo.id === '1');
    expect(startWithWhy).toHaveProperty('title', 'Start With Why');
    expect(startWithWhy).toHaveProperty('release', 2009);
  });

  // it('/books/:id should return book detail with author', async () => {
  //   const res = await request(app).get('/books/1');
  //   expect(res.body.length).toEqual(1);
  //   const startWithWhy = res.body.find((boo) => boo.id === '1');
  //   expect(startWithWhy).toHaveProperty('title', 'Start With Why');
  //   expect(startWithWhy).toHaveProperty('release', 2009);
  //   expect(startWithWhy.authors[0]).toHaveProperty('id');
  //   expect(startWithWhy.authors[0]).toHaveProperty('name');
  // });

  it('/books/:id should return book detail with author', async () => {
    const resp = await request(app).get('/books/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      // name: expect.any(Array),
      pairs: expect.any(Array),
      release: expect.any(Number),
      title: expect.any(String),    
    });
  });

  afterAll(() => {
    pool.end();
  });

});



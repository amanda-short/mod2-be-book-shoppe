const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should return a list of books', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(8);
    const startWithWhy = res.body.find((boo) => boo.id === '1');
    expect(startWithWhy).toHaveProperty('title', 'Start With Why');
    expect(startWithWhy).toHaveProperty('release', 2009);
  });

  afterAll(() => {
    pool.end();
  });

});



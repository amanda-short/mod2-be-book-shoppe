const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/authors should return a list of authors', async () => {
    const resp = await request(app).get('/authors');
    expect(resp.status).toBe(200);
    console.log(resp.body);
    expect(resp.body.length).toEqual(4);
    // id: expect.any(String),
    // name: expect.any(String),
      
  });

  afterAll(() => {
    pool.end();
  });
});

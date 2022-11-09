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
    expect(resp.body.length).toEqual(4); 
  });

  it('/author/:id should return author detail with books', async () => {
    const resp = await request(app).get('/authors/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
      pairs: expect.any(Array)
      // release: expect.any(Number),
      // title: expect.any(String),    
    });
  });

  afterAll(() => {
    pool.end();
  });
});

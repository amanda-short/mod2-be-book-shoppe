-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS books cascade;
DROP TABLE IF EXISTS authors cascade;
DROP TABLE IF EXISTS pairs;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title VARCHAR,
  release INT NOT NULL
);

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR
);

CREATE TABLE pairs (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  author_id BIGINT,
  book_id BIGINT,
  detail VARCHAR NOT NULL,
  FOREIGN KEY (author_id) REFERENCES authors(id),
  FOREIGN KEY (book_id) REFERENCES books(id)
);

INSERT INTO books (
    title,
    release
)
VALUES
  ('Start With Why', '2009'),
  ('Leaders Eat Last', '2014'),
  ('The Infinite Game', '2018'),
  ('The Gifts of Imperfection', '2010'),
  ('Braving the Wilderness', '2017'),
  ('Dare to Lead', '2018'),
  ('The 7 Habits of Highly Effective People', '1989'),
  ('Good to Great', '2001');

INSERT INTO authors (
    name
)  
VALUES
  ('Simon Sinek'),
  ('Brene Brown'),
  ('Stephen Covey'),
  ('Jim Collins');

INSERT INTO pairs (
    author_id,
    book_id,
    detail
)  
VALUES
  (1,1,'Start With Why'),
  (1,2,'Leaders Eat Last'),
  (1,3,'The Infinite Game'),
  (2,4,'The Gifts of Imperfection'),
  (2,5,'Braving the Wilderness'),
  (2,6,'Dare to Lead'),
  (3,7,'The 7 Habits of Highly Effective People'),
  (4,8,'Good to Great');

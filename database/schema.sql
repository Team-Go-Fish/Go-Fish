/* rough draft */

DROP DATABASE IF EXISTS fish;

CREATE DATABASE fish;
\c fish;

CREATE TABLE users
(
    id serial NOT NULL,
    username text,
    firstName text,
    lastName text,
    email text,
    phone integer,
    password text,
    PRIMARY KEY (id)
);

CREATE TABLE friendships
(
    id serial NOT NULL,
    userID integer NOT NULL,
    friendID integer NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (friendID) REFERENCES users(id)
);

CREATE TABLE movies
(
  id serial NOT NULL,
  title text,
  genre text,
  runtime text,
  poster text,
  rating decimal,
  movie_description text,
  PRIMARY KEY (id)
);

CREATE TABLE user_movies
(
  id serial NOT NULL,
  userID integer NOT NULL,
  movieID integer NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (movieID) REFERENCES movies(id)
);

-- SAMPLE DATA FOR TESTING
INSERT INTO users (username, firstName, lastName, email, phone, password)
VALUES
  ('skywalker', 'Luke', 'Skywalker', 'luke@starwars.com', '1234567890', 'hash'),
  ('princess', 'Princess', 'Leia', 'leia@starwars.com', '1234567890', 'hash'),
  ('solo', 'Han', 'Solo', 'solo@starwars.com', '1234567890', 'hash'),
  ('vader', 'Darth', 'Vader', 'vader@starwars.com', '1234567890', 'hash'),
  ('r2d2', 'R2', 'D2', 'r2d2@starwars.com', '1234567890', 'hash'),
  ('chewie', 'Chewbacca', 'Chewbacca', 'chewie@starwars.com', '1234567890', 'hash'),
  ('yoda', 'Yoda', 'Yoda', 'yoda@starwars.com', '1234567890', 'hash'),
  ('trooper', 'Storm', 'Trooper', 'trooper@starwars.com', '1234567890', 'hash'),
  ('bountyhunter', 'Boba', 'Fett', 'bountyhunter@starwars.com', '1234567890', 'hash')
;
INSERT INTO friendships (userID, friendID)
VALUES
  (1, 2),
  (1, 3),
  (2, 3)
;

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
    phone text,
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
  movieDBiD integer,
  title text,
  poster text,
  rating decimal,
  movie_description text,
  PRIMARY KEY (id)
);

CREATE TABLE users_movies
(
  id serial NOT NULL,
  userID integer,
  movieID integer,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (movieID) REFERENCES movies(id)
);

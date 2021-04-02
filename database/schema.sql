/* rough draft */

DROP DATABASE IF EXISTS fish;

CREATE DATABASE fish;
\c fish;

CREATE TABLE users
(
    id serial NOT NULL,
    username text,
    password text,
    PRIMARY KEY (id)
);

CREATE TABLE friendships
(
    id serial NOT NULL,
    userID serial NOT NULL,
    friendID serial NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES reviews(id),
    FOREIGN KEY (friendID) REFERENCES users(id)
);

CREATE TABLE movies
(
  id serial NOT NULL,
  title text,
  genre text,
  runtime text,
  poster text,
  rating Number,
  movie_description text
)

CREATE TABLE user-movies
(
  id serial NOT NULL,
  userID,
  movieID,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (movieID) REFERENCES users(id)
);

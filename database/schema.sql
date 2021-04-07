/* rough draft */

DROP DATABASE IF EXISTS fish;

CREATE DATABASE fish;
\c fish;
drop table if exists users;
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
drop table if exists friendships;
CREATE TABLE friendships
(
    id serial NOT NULL,
    userID integer NOT NULL,
    friendID integer NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (friendID) REFERENCES users(id)
);
drop table if exists movies;
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
drop table if exists users_movies;
CREATE TABLE users_movies
(
  id serial NOT NULL,
  userID integer,
  movieID integer,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (movieID) REFERENCES movies(id)
);

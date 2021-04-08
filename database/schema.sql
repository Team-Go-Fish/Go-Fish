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
    picture text,
    adult boolean,
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
CREATE TABLE notifications
(
  id serial NOT NULL,
  userID integer,
  friendID integer,
  movieID integer,
  notification_type text,
  notification_time timestamp,
  notification_message text,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (friendID) REFERENCES users(id),
  FOREIGN KEY (movieID) REFERENCES movies(id)
);
SET timezone = 'America/Los_Angeles';

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
INSERT INTO notifications (userID, friendID, movieID, notification_type, notification_time, notification_message)
VALUES
  ('1', '2', NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Jack wants to be friends!'),
  ('1', '3', NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Dorien wants to be friends!'),
  ('1', '4', NULL, 'matchedMovie', '2016-06-22 19:10:25-07', 'You and Nick have a matched movie!'),
  ('1', '5', NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Jake wants to be friends!'),
  ('1', '6', NULL, 'matchedMovie', '2016-06-22 19:10:25-07', 'You and Mason have a matched movie!'),
  ('1', '7', NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Malcolm wants to be friends!'),
  ('1', '8', NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Kevin wants to be friends!'),
  ('1', '9', NULL, 'matchedMovie', '2016-06-22 19:10:25-07', 'You and Ryne have a matched movie!')
;
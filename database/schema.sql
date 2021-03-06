/* rough draft */

DROP DATABASE IF EXISTS fish;

CREATE DATABASE fish;
\c fish;
DROP TABLE IF EXISTS users;
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
DROP TABLE IF EXISTS friendships;
CREATE TABLE friendships
(
    id serial NOT NULL,
    userID integer NOT NULL,
    friendID integer NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userID) REFERENCES users(id),
    FOREIGN KEY (friendID) REFERENCES users(id)
);
DROP TABLE IF EXISTS movies;
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
DROP TABLE IF EXISTS users_movies;
CREATE TABLE users_movies
(
  id serial NOT NULL,
  userID integer,
  movieID integer,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (movieID) REFERENCES movies(id)
);
DROP TABLE IF EXISTS notifications;
CREATE TABLE notifications
(
  id serial NOT NULL,
  userid integer,
  friendid integer,
  movieid integer,
  notification_type text,
  notification_time timestamp,
  notification_message text,
  notification_status text,
  PRIMARY KEY (id),
  FOREIGN KEY (userid) REFERENCES users(id),
  FOREIGN KEY (friendid) REFERENCES users(id),
  FOREIGN KEY (movieid) REFERENCES movies(moviedbid)
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
INSERT INTO notifications (userid, friendid, movieid, notification_type, notification_time, notification_message, notification_status)
VALUES
  (1, 2, NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Jack wants to be friends!', 'open'),
  (1, 3, NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Dorien wants to be friends!', 'open'),
  (1, 4, 3, 'matchedMovie', '2016-06-22 19:10:25-07', 'You and Nick have a matched movie!', 'open'),
  (1, 5, NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Jake wants to be friends!', 'open'),
  (1, 6, 4, 'matchedMovie', '2016-06-22 19:10:25-07', 'You and Mason have a matched movie!', 'open'),
  (1, 7, NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Malcolm wants to be friends!', 'open'),
  (1, 8, NULL, 'newFriend', '2016-06-22 19:10:25-07', 'Kevin wants to be friends!', 'open'),
  (1, 9, 5, 'matchedMovie', '2016-06-22 19:10:25-07', 'You and Ryne have a matched movie!', 'open'),
  (11, 10, NULL, 'newFriend', '2021-04-04 10:10:25-07', 'Nick wants to be friends!', 'open'),
  (11, 12, NULL, 'newFriend', '2021-04-04 10:10:25-07', 'Ryne wants to be friends!', 'open'),
  (11, 13, NULL, 'newFriend', '2021-04-04 10:10:25-07', 'Mason wants to be friends!', 'open'),
  (11, 15, NULL, 'newFriend', '2021-04-04 10:10:25-07', 'Jack wants to be friends!', 'open'),
  (11, 16, NULL, 'newFriend', '2021-04-04 10:10:25-07', 'Dorien wants to be friends!', 'open'),
  (11, 17, NULL, 'newFriend', '2021-04-04 10:10:25-07', 'Kevin wants to be friends!', 'open'),
  (11, 10, 4, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Nick have a matched movie!', 'open'),
  (11, 12, 6, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Ryne have a matched movie!', 'open'),
  (11, 13, 9, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Mason have a matched movie!', 'open'),
  (11, 15, 22, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Jack have a matched movie!', 'open'),
  (11, 16, 5, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Dorien have a matched movie!', 'open'),
  (11, 17, 21, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Kevin have a matched movie!', 'open')
;


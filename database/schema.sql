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
  userID integer,
  friendID integer,
  movieID integer,
  notification_type text,
  notification_time timestamp,
  notification_message text,
  notification_status text,
  PRIMARY KEY (id),
  FOREIGN KEY (userID) REFERENCES users(id),
  FOREIGN KEY (friendID) REFERENCES users(id),
  FOREIGN KEY (movieID) REFERENCES movies(id)
);
SET timezone = 'America/Los_Angeles';

-- SAMPLE DATA FOR TESTING
INSERT INTO users (username, firstName, lastName, email, picture, adult)
VALUES
  ('verploegjack', 'Jack', 'Verploeg', 'Verploegjack@gmail.com', 'img/src', 'true')
;
/*
  ('skywalker', 'Luke', 'Skywalker', 'luke@starwars.com', 'img/src', 'false'),
  ('princess', 'Princess', 'Leia', 'leia@starwars.com', 'img/src', 'true'),
  ('solo', 'Han', 'Solo', 'solo@starwars.com', 'img/src', 'true'),
  ('vader', 'Darth', 'Vader', 'vader@starwars.com', 'img/src', 'true'),
  ('r2d2', 'R2', 'D2', 'r2d2@starwars.com', 'img/src', 'false'),
  ('chewie', 'Chewbacca', 'Chewbacca', 'chewie@starwars.com', 'img/src', 'false'),
  ('yoda', 'Yoda', 'Yoda', 'yoda@starwars.com', 'img/src', 'true'),
  ('trooper', 'Storm', 'Trooper', 'trooper@starwars.com', 'img/src', 'false'),
  ('bountyhunter', 'Boba', 'Fett', 'bountyhunter@starwars.com', 'img/src', 'false'),
  ('nickfin', 'Nick', 'Papadakis', 'nickfin2014@gmail.com', 'img/src', 'true'),
  ('mmarshall', 'Malcolm', 'Marshall', 'm.marshall369@gmail.com', 'img/src', 'true'),
  ('ryne201011', 'Ryne', 'Schroder', 'ryne201011@gmail.com', 'img/src', 'true'),
  ('mhoffman', 'Mason', 'Hoffman', 'mhoffman3939@gmail.com', 'img/src', 'true'),
*/
INSERT INTO movies (movieDBiD, title, poster, rating, movie_description)
VALUES
(11, "Star Wars", "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg", 8.2, "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire."),
(181812, "Star Wars: The Rise of Skywalker", "/db32LaOibwEliAmSL2jjDF6oDdj.jpg", 6.5, "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins."),
(181808, "Star Wars: The Last Jedi", "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg", 6.9, "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order."),
(348350, "Solo: A Star Wars Story", "/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg", 6.6, "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian."),
(140607, "Star Wars: The Force Awakens", "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg", 7.4, "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers."),
(330459, "Rogue One: A Star Wars Story", "/5jX3p0apUG5bkMHtnKZch0xpkBS.jpg", 7.5, "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy."),
(12180, "Star Wars: The Clone Wars", "/ywRtBu88SLAkNxD0GFib6qsFkBK.jpg", 6, "Set between Episode II and III, The Clone Wars is the first computer animated Star Wars film. Anakin and Obi Wan must find out who kidnapped Jabba the Hutt's son and return him safely. The Seperatists will try anything to stop them and ruin any chance of a diplomatic agreement between the Hutts and the Republic."),
(1893, "Star Wars: Episode I - The Phantom Menace", "/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg", 6.5, "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi."),
(1895, "Star Wars: Episode III - Revenge of the Sith", "/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg", 7.3, "The evil Darth Sidious enacts his final plan for unlimited power -- and the heroic Jedi Anakin Skywalker must choose a side."),
(1894, "Star Wars: Episode II - Attack of the Clones", "/oZNPzxqM2s5DyVWab09NTQScDQt.jpg", 6.5, "Following an assassination attempt on Senator Padmé Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot that could change the galaxy forever.")
;

INSERT INTO friendships (userID, friendID)
VALUES
  (1, 2),
  (1, 3),
  (2, 3)
;

INSERT INTO notifications (userID, friendID, movieID, notification_type, notification_time, notification_message, notification_status)
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
  (11, 15, 19, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Jack have a matched movie!', 'open'),
  (11, 16, 5, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Dorien have a matched movie!', 'open'),
  (11, 17, 20, 'matchedMovie', '2021-04-04 10:10:25-07', 'You and Kevin have a matched movie!', 'open')
;
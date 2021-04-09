//  queries to database

//  get friends
// select f1.*
// -- from friendships f1
// -- inner join friendships f2 on f1.userID = f2.friendID and f1.friendID = f2.userID;


//get movies two users have in common
module.exports.getCommonMovies = `SELECT * FROM movies m JOIN (SELECT A.userID AS user1, B.userID AS user2, A.movieID FROM users_movies A, users_movies B WHERE A.userID = $1 AND B.userID = $2 AND A.movieID = B.movieID) common_movies ON m.id = common_movies.movieID`;

//get a user's movie list
module.exports.getMyMovies = `SELECT * FROM movies m, users_movies u WHERE m.id = u.movieID AND u.userID = $1`;

//geta user's friend list
//module.exports.getMyFriends = `SELECT * FROM `

//add new movie to database
module.exports.addMovie = `INSERT INTO movies (movieDBiD, title, poster, rating, movie_description) VALUES ($1, $2, $3, $4, $5) RETURNING id`;

//find one movie in the database
module.exports.findOneMovie = `SELECT * FROM movies m WHERE m.movieDBiD = $1`;

//find one movie from a user's list
module.exports.findUserMovie = `SELECT * FROM users_movies u WHERE u.userID = $1 AND u.movieID = $2`;

//add a movie to a user's list
module.exports.addMovieToUser = `INSERT INTO users_movies (userID, movieID) VALUES ($1, $2) RETURNING id`;

//remove a movie from a user's list
module.exports.deleteUserMovie = `DELETE FROM users_movies WHERE userID = $1 AND movieID = $2 RETURNING users_movies.id`;

//add new user after signing up
module.exports.addNewUser = `INSERT INTO users ( username, firstName, lastName, email, picture, adult) VALUES ($1, $2, $3, $4, $5 $6) RETURNING id`;
//find a userID by email
module.exports.getUserID = `SELECT id FROM users WHERE email = $1`;

// friends
module.exports.getMyFriends = (userID) => {
  return `
    SELECT *
    FROM users u
    INNER JOIN friendships f
      ON u.id = f.friendID
    WHERE f.userID = ${userID}
  ;`
};

module.exports.addNewFriend = (userID, friendID) => {
  return `
    INSERT INTO friendships (userID, friendID)
    VALUES (${userID}, ${friendID})
  ;`
};

module.exports.getUsers =
  `SELECT *
    FROM users
  ;`
;

module.exports.getUserNotifications = (userID) => {
  return `
    SELECT *
    FROM notifications
    WHERE userID = ${userID}
  ;`
};



//  queries to database

//  get friends
// select f1.*
// -- from friendships f1
// -- inner join friendships f2 on f1.userID = f2.friendID and f1.friendID = f2.userID;

//get movies two users have in common
module.exports.getCommonMovies = `SELECT * FROM movies m JOIN (SELECT A.userID AS user1, B.userID AS user2, A.movieID FROM users_movies A, users_movies B WHERE A.userID = $1 AND B.userID = $2 AND A.movieID = B.movieID) common_movies ON m.id = common_movies.movieID`;

//get a user's movie list
module.exports.getMyMovies = `SELECT * FROM movies m, users_movies u WHERE m.id = u.movieID AND u.userID = $1`;

//add new movie to database
module.exports.addMovie = `INSERT INTO movies (movieDBiD, title, poster, rating, movie_description) VALUES ($1, $2, $3, $4, $5) RETURNING id`;

//find one movie in the database
module.exports.findOneMovie = `SELECT * FROM movies m WHERE m.movieDBiD = $1`;

//find one movie from a user's list
module.exports.findUserMovie = `SELECT * FROM users_movies u WHERE u.movieID = $1`;

//add a movie to a user's list
module.exports.addMovieToUser = `INSERT INTO users_movies (userID, movieID) VALUES ($1, $2) RETURNING id`;

//remove a movie from a user's list
module.exports.deleteUserMovie = `DELETE FROM users_movies WHERE userID = $1 AND movieID = $2 RETURNING users_movies.id`;
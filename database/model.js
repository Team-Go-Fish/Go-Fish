const pool = require('./index');
const queries = require('./queries.js');
//const exampleData = require('./exampleData');
// //  methods for getting data from database (using queries from queries.js)

// const pool = require('./index.js');
// const queries = require('./queries.js');

// const getMovies = async () => {

//   try {
//     const movies = pool.query(queries.getMovies);
//     return movies;
//   }
//   catch (error) {
//     console.log(error);
//   }

// };

module.exports.getMyMovies = async (userId) => {
  try {
    let movies = await pool.query(queries.getMyMovies, [userId]);
    return movies;
  }
  catch (error) {
    return error;
  }
};

module.exports.getMyFriends = async (userId) => {
  try {
    let friends = await pool.query(queries.getMyFriends(userId));
    return friends;
  } catch (error) {
    return error;
  }
};

module.exports.addMovieToUserList = async (userId, movieObj) => {
  try {
    let movie = await pool.query(queries.findOneMovie, [movieObj.id]);
    if (!movie.rows.length) {
      let newMovie = await pool.query(queries.addMovie, [movieObj.id, movieObj.title, movieObj.poster_path, movieObj.vote_average, movieObj.overview]);
      let userMovie = await pool.query(queries.addMovieToUser, [userId, newMovie.rows[0].id]);
      return userMovie.rows[0];
    } else {
      let existsUserMovie = await pool.query(queries.findUserMovie, [userId, movie.rows[0].id]);
      if (!existsUserMovie.rows.length) {
        let userMovie = await pool.query(queries.addMovieToUser, [userId, movie.rows[0].id]);
        return userMovie.rows[0];
      } else {
        return 'Already on wish-list!';
      }
    }
  }
  catch (error) {
    return error;
  }
};

module.exports.addNewFriend = async (userId, username) => {
  try {
    let friendId = await pool.query(queries.getUserIDByUserName(username));
    friendId = friendId.rows[0].id;
    // console.log({friendId})
    // return friendId;
    let data = await pool.query(queries.addNewFriend(userId, friendId));
    return data;
  } catch (error) {
    return error;
  }
};


module.exports.removeMovieFromUserList = async (userId, movieId) => {
  try {
    let result = await pool.query(queries.deleteUserMovie, [userId, movieId]);
    return result.rows[0];
  }
  catch (error) {
    return error;
  }
};

module.exports.addNewUser = async () => {
  try {
    let response = await pool.query(queries.addNewUser, [username, firstName, lastName, email, picture]);
    return response;
  }
  catch (error) {
    return error;
  }
}
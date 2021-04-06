const queries = require('./queries.js');
const db = require('../database/index.js');
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
    let movies = await db.pool.query(queries.getMyMovies, [userId]);
    return movies;
  }
  catch (error) {
    return error;
  }
};

module.exports.addMovieToUserList = async (userId, movieObj) => {
  try {
    let movie = await db.pool.query(queries.findOneMovie, [movieObj.id]);
    if (!movie.rows.length) {
      let newMovie = await db.pool.query(queries.addMovie, [movieObj.id, movieObj.title, movieObj.poster_path, movieObj.vote_average, movieObj.overview]);
      let userMovie = await db.pool.query(queries.addMovieToUser, [userId, newMovie.rows[0].id]);
      return userMovie.rows[0];
    } else {
      let existsUserMovie = await db.pool.query(queries.findUserMovie, [movie.rows[0].id]);
      if (!existsUserMovie.rows.length) {
        let userMovie = await db.pool.query(queries.addMovieToUser, [userId, movie.rows[0].id]);
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

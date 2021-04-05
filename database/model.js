const queries = require('./queries.js');

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
    let movies = pool.query(queries.getMyMovies, userId);
    return movies;
  }
  catch (error) {
    return error;
  }
};
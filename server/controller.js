const db = require('../database/model.js');
const helper = require('./movieHelpers.js');

module.exports.getPopularMovies = async (req, res) => {
  console.log('I am in the popular movies controller');
  try {
    const popularMovies = await helper.getPopularMovies();
    res.status(200).send(popularMovies);
  }
  catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports.searchMovies = async (req, res) => {
  console.log('I am in the search controller');
  try {
    const searchedMovies = await helper.searchMovies(req.params.input);
    res.status(200).send(searchedMovies);
  }
  catch (error) {
    console.log(error);
    res.status(500);
  }
};

module.exports.getMyMovies = (req, res) => {
  db.getMyMovies(req.params.userId)
  .then(movies => {
    res.status(200).send(movies.data);
  })
  .catch(err => {
    res.status(500).send(err);
  })
};
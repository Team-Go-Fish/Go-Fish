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

module.exports.getMyMovies = async (req, res) => {
  try {
    let movies = await db.getMyMovies(req.params.userId);
    res.status(200).send(movies.rows);
  }
  catch (error) {
    res.status(500).send(error);
  }
};

module.exports.addMovieToUser = async (req, res) => {
  try {
    let result = await db.addMovieToUserList(req.params.userId, req.body);
    res.status(201).send(result);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

module.exports.removeMovieFromUser = async (req, res) => {
  try {
    let result = db.removeMovieFromUserList(req.params.userId, req.query.movieId);
    res.status(200).send(result);
  }
  catch (error) {
    res.status(500).send(error);
  }
}

module.exports.searchMovies = async (req, res) => {
  console.log('I am in the search controller');
  console.log(req.params.input);
  try {
    const searchedMovies = await helper.searchMovies(req.params.input);
    res.status(200).send(searchedMovies);
  }
  catch (error) {
    console.log(error);
    res.status(500);
  }
};

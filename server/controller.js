const db = require('../database/model.js');
const helper = require('./movieHelper.js');

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
    res.status(200).send(result);
  }
  catch (error) {
    res.status(500).send(error);
  }
}
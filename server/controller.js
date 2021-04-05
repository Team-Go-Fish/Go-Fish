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

module.exports.getMyMovies = (req, res) => {
  db.getMyMovies(req.params.userId)
  .then(movies => {
    res.status(200).send(movies.data);
  })
  .catch(err => {
    res.status(500).send(err);
  })
};

module.exports.getMyFriends = (req, res) => {
  db.getMyFriends(req.params.userId)
    .then(friends => {
      res.status(200).send(friends.rows);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

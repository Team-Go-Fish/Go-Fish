const db = require('../database/model.js');

module.exports.getMyMovies = (req, res) => {
  db.getMyMovies(req.params.userId)
  .then(movies => {
    res.status(200).send(movies.data);
  })
  .catch(err => {
    res.status(500).send(err);
  })
};
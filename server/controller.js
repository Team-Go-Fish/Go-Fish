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

module.exports.getMyFriends = (req, res) => {
  db.getMyFriends(req.params.userId)
    .then(friends => {
      res.status(200).send(friends.rows);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

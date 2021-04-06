const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//  serve build folder when it is time for production environment
// app.use(express.static(__dirname + '/../build'));

// const database = require('../database/index.js');
const controller = require('./controller.js');

const PORT = '3005';

// route(s)
app.get('/movies', controller.getPopularMovies);
app.get('/search/:input', controller.searchMovies);
app.get('/movies/:userId', controller.getMyMovies);

app.listen(PORT, (err, result) => {
  if (err) {
    console.log('there was an error starting the server!');
  } else {
    console.log(`Server listening on port ${PORT}!`);
  }
});
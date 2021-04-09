const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//  serve build folder when it is time for production environment
// app.use(express.static(__dirname + '/../build'));

//const database = require('../database/index.js');
const controller = require('./controller.js');

const PORT = '3005';

// route(s)
app.get('/movies', controller.getPopularMovies);
app.get('/search/:input', controller.searchMovies);

// get a user's movie list
app.get('/movies/:userId', controller.getMyMovies);

// get a user's friends
app.get('/friends/:userId', controller.getMyFriends);

// add new friend to a user
app.post('/friends/add/:userId', controller.addNewFriend);

// return all users
app.get('/users', controller.getUsers);

// return user's notifications
app.get('/notifications/:userID', controller.getUserNotifications);

// add new notification
app.post('/notifications/add', controller.addUserNotification);

// get a user's friend list
app.get('/friends/:userId', controller.getMyFriends);

// add a movie to a user's list, and add movie to database if not already stored
  // takes a movie object as req.body
app.post('/movies/:userId', controller.addMovieToUser);

// remove a movie from a user's list
  // delete request should be to: /movies/:userid?movieId=:movieId
app.delete('/movies/:userId', controller.removeMovieFromUser);

// add a new user
app.post('/users/add/user', controller.addNewUser);

// update age of user
app.put('/users/age/:email', controller.updateUserAge);

// get user ID
app.get('/user/:email', controller.getUserID);

app.listen(PORT, (err, result) => {
  if (err) {
    console.log('there was an error starting the server!');
  } else {
    console.log(`Server listening on port ${PORT}!`);
  }
});

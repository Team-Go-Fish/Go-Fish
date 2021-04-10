import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoFishDescription from './GoFishDescription';
import Button from 'react-bootstrap/Button';

/**This component takes in a users movie list and the userID of the friend selected by the checkbox.
 * When "Go Fish!" is pressed, a request is made to the DB to return the friend's movie list. Then
 * both movie lists are compared and a matching movie is passed to GoFishDescription to be displayed*/
const GoFishWithFriends = ({ userID, selected, myMovies }) => {
  const [friendMovies, setFriendMovies] = useState([]);
  const [match, setMatch] = useState({});
  const [modal, setModal] = useState(true);

  /**Triggered by Go Fish button. Queries DB for friend's movie list. Sets response as friendMovies */
  const getFriendMovies = async() => {
    try {
      const response = await axios.get(`http://localhost:3005/movies/${selected}`);
      setFriendMovies(response.data);
    } catch (err) {
        console.log(err);
    }
  };

  /**After friendMovies is populated, triggers findMatches and toggleModal */
  useEffect(() => {
    findMatches();
    toggleModal();
  },[friendMovies]);

  /**Compares two movie lists. Finds a random movie common to both lists. Sets that movie as "match" */
  const findMatches = () => {
    let myIds = [];
    for (var i = 0; i < myMovies.length; i ++) {
      myIds.push(myMovies[i].movieid);
    }
    let friendIds = [];
    for (var j = 0; j < friendMovies.length; j ++) {
      friendIds.push(friendMovies[j].movieid)
    }
    let matchedMovies = [];
    for (var k = 0; k < friendIds.length; k ++) {
      if (myIds.includes(friendIds[k])) {
        matchedMovies.push(friendMovies[k]);
      }
    }
    var random = matchedMovies[Math.floor(Math.random() * matchedMovies.length)];
    setMatch(random);
  }

  /**Toggles modal off/on*/
  const toggleModal = () => {
    setModal(!modal);
  };

<<<<<<< HEAD
  const getFriendMovies = async() => {
    try {
      const response = await axios.get(`https://gofishmovies.com/movies/${selected}`);
      setFriendMovies(response.data);
    } catch (err) {
        console.log(err);
    }
  };

  useEffect(() => {
    findMatches();
    toggleModal();
  },[friendMovies]);

=======
>>>>>>> 5cc8c814014e8f80049ce61300c96fe65b58d088
  return (
    <div className="go-fish">
      <Button onClick={getFriendMovies}>Go Fish!</Button>
      {modal && (<GoFishDescription show={modal} onHide={toggleModal} movie={match} id="goFish"/>)}
    </div>
  )
};

export default GoFishWithFriends;

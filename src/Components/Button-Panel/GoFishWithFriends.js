import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GoFishDescription from './GoFishDescription'
import Button from 'react-bootstrap/Button';

const GoFishWithFriends = ({ userID, selected, myMovies }) => {
  const [friendMovies, setFriendMovies] = useState([]);
  const [match, setMatch] = useState({});
  const [modal, setModal] = useState(true);

  const findMatches = () => {
    let myIds = [];
    for (var i = 0; i < myMovies.length; i ++) {
      myIds.push(myMovies[i].movieid);
    }
    let friendIds = [];
    for (var j = 0; j < friendMovies.length; j ++) {
      friendIds.push(friendMovies[j].movieid)
    }
    console.log('my:', myIds);
    console.log('friend:', friendIds);
    let matchedMovies = [];
    for (var k = 0; k < friendIds.length; k ++) {
      if (myIds.includes(friendIds[k])) {
        matchedMovies.push(friendMovies[k]);
      }
    }
    console.log('matches:', matchedMovies)
    var random = matchedMovies[Math.floor(Math.random() * matchedMovies.length)];
    console.log(random)
    setMatch(random);

    // let matchedMovie = {};
    // for (var k = 0; k < myIds.length; k ++) {
    //   if (friendIds.includes(myIds[k])) {
    //     matchedMovie = myMovies[k];
    //     setMatch(matchedMovie);
    //     return;
    //   }
    // }
  }

  const toggleModal = () => {
    setModal(!modal);
  };

  const getFriendMovies = async() => {
    try {
      const response = await axios.get(`https://3.136.112.63/movies/${selected}`);
      setFriendMovies(response.data);
    } catch (err) {
        console.log(err);
    }
  };

  useEffect(() => {
    findMatches();
    toggleModal();
  },[friendMovies]);

  return (
    <div className="go-fish">
      <Button onClick={getFriendMovies}>Go Fish!</Button>
      {modal && (<GoFishDescription show={modal} onHide={toggleModal} movie={match} id="goFish"/>)}
    </div>
  )
};

export default GoFishWithFriends;
